// npm run dev to run the script inside the package-json;

const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/admin/auth');
const user = require('./routes/admin/products');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['lkasldkfjp3jp2ij5p2i35j']
}));
app.use(authRouter);
app.use(user);

app.listen(3000, ()=>{
    console.log('Listening');
});