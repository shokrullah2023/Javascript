const express = require('express');
const cartRepo = require('../repositories/carts');
const productRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

// Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    let cart;
   if(!req.session.cartId){
        cart = await cartRepo.create({ items: []})
        req.session.cartId = cart.id; 
   }
   else{
        cart = await cartRepo.getOne(req.session.cartId);
   }

   const existingItem = cart.items.find(item => item.id === req.body.productId);
   if(existingItem){
        existingItem.quantity++;
   }else{
        cart.items.push({ id: req.body.productId, quantity: 1})
   }
   await cartRepo.update( cart.id, { items: cart.items});

   console.log(cart);
    res.send('Product added to cart!');
}) 

// Receive a GET request to show all items in cart
router.get('/cart', async (req, res) => {
    if (!req.session.cartId){
        return res.redirect('/');
    }

    const cart = await cartRepo.getOne(req.session.cartId);

    for(let item of cart.items){
        const product = await productRepo.getOne(item.id);

        item.product = product;
    }

    res.send(cartShowTemplate({items: cart.items}))
    
})

// Receive a post request to delete an item from a cart

module.exports = router;