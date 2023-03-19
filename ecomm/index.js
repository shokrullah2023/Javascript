// npm run dev to run the script inside the package-json;

const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repository/users');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/admin/auth');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['lkasldkfjp3jp2ij5p2i35j']
}));
app.use(authRouter);

app.listen(3001, ()=>{
    console.log('Listening');
});