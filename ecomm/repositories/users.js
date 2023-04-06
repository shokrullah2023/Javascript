const fs = require("fs");
const crypto = require('crypto');
const util = require('util');
const Repository = require("./repository");

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
   
    async create(attrs){
        // attr {"email":.., "password"=""}
        attrs.id = this.randomId();
    
        const salt = crypto.randomBytes(4).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);
    
        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`
        };
        records.push(record);
    
       await this.writeAll(records);
    
       return record;
    }
    
    async comparePassword(password, supplied){
    
        const [hash, salt] = password.split('.');
        const hashSuppliedBuf = await scrypt(supplied, salt, 64);
    
        return hash === hashSuppliedBuf.toString('hex');
    
    }



}

module.exports = new UsersRepository('users.json');

// const test = async ()=> {
//     const repo = new UsersRepository("users.json");
    // await repo.create({"email":"shokrullahjouya59@gmail.com", "password":"password"});
    // const user = await repo.getOne('fcfb675b');
    // console.log(user);
    // const users = await repo.getAll();
    // console.log(users);
    // await repo.delete('da83478c');
    // console.log(users);
    // const add = await repo.update('ab6bbfd2', {"degree": "bachelor"});
    // console.log(add);\

//     const found = await repo.getOneBy({id: "ab6bbfd2"});
//     console.log(found);

// }

// test();
