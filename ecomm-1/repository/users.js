const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);
const Repository = require('./repository');

class userRepository extends Repository{
    async create(attrs){
        attrs.id = this.randomId();
        const records = await this.getAll();
        const salt = crypto.randomBytes(8).toString('hex');
        const hashed = await scrypt(attrs.password, salt, 64);
        const record = {...attrs,
            password: `${hashed.toString('hex')}.${salt}` 
        };
        records.push(record);

        await this.writeAll(records);
        return record;
    }

    async comparePassword(saved, supplied){
        const [hash, salt] = saved.split('.');
        const hashSupplied = await scrypt(supplied, salt, 64);
        return hash === hashSupplied.toString('hex');
    }

    
}

module.exports = new userRepository('users.json');