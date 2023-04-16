// npm run dev to run the script inside the package-json;

const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session');

const authRouter = require('./routes/admin/auth');
const adminProdcut = require('./routes/admin/products');

const userProduct = require('./routes/carts');
const product = require('./routes/products');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['lkasldkfjp3jp2ij5p2i35j']
}));
app.use(authRouter);
app.use(adminProdcut);
app.use(userProduct);
app.use(product);

app.listen(3000, ()=>{
    console.log('Listening');
});