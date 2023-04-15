const express = require('express');
const cartRepo = require('../repositories/carts');

const router = express.Router();

// Receive a post request to add an item to a cartRepo
router.post('/cart/products', async(req, res) => {
    let cart;
    if(!req.session.cartId){
        cart = await cartRepo.create({ items: []})
        req.session.cartId = cartRepo.id;
    }else{
        cart = await cartRepo.getOne(req.session.cartId)
    }
    console.log(cartRepo);
    res.send('Product added!')
})
// Receive a GET request to show all items in cartRepo

// Receive a post request to delete an item from a cartRepo

module.exports = router;