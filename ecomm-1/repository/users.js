const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);

class userRepository{
    constructor(filename){
        if(!filename){
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            fs.readFileSync(this.filename);
        } catch (error) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll(){
        return JSON.parse(await fs.promises.readFile(this.filename, {encoding: 'utf8'}));
    }

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

    async writeAll(records){
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    randomId(){
        return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id){
        const records = await this.getAll();
        const findUser = records.find(record => record.id === id);
        return findUser;
    }

    async delete(id){
        const records = await this.getAll();
        const filtered = records.filter(record => record.id !== id);
        await this.writeAll(filtered);
    }

    async update(attrs, id){
        const records = await this.getAll();
        const record = records.find(record => record.id === id);
        if(!record){
            throw new Error(`Record ${id} not found`);
        }
        Object.assign(record, attrs);
        await this.writeAll(records);
    }

    async getOneBy(filter){
        const records = await this.getAll();

        for(let record of records){
            let found = true;
            for (let key in filter){
                if(record[key] !== filter[key]){
                    found = false;
                }
            }
            if(found){
                return record;
            }
        }
    }
}

module.exports = new userRepository('users.json');