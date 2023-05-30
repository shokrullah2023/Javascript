const express = require('express');
const repo = require('./repository/users');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', (req, res) => {
    res.send(
        `<div>
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password Confirmation" />
                <button>Submit</button>
            </form>
        </div>
        `
    );
});

// const bodyParser = (req, res, next) => {
//    if(req.method == 'POST'){
//     req.on('data', data => {
//         const parsed = data.toString('utf-8').split('&');
//         const formData = {};
//         for(let pair of parsed){
//            const [key, value] = pair.split('=');
//            formData[key] = value;
//            next();
//         }
//         console.log(formData);
//     });
//    }else{
//     next();
//    }
    
// };

app.post('/', async (req, res)=> {
    const {email, password, passwordConfirmation} = req.body;
    const existingUser = await repo.getOneBy({email});
    if(existingUser){
        return res.send('Email is in use');
    }
    if(password !== passwordConfirmation){
        return res.send('Password is not matching!');
    }
  res.send('Account Created');
});

app.listen(3000, ()=>{
    console.log('Listening');
});

