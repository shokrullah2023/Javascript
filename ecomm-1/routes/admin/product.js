const productTemplate = require('../../views/product/new');
const productRepo = require('../../repository/products');
const express = require('express');
const {requireTitle, requirePrice} = require('./validators');
const {handleErrors} = require('../admin/middleware');
const productTemplateIndex = require('../../views/product/index');


const router = express.Router();

router.get('/admin/product', async (req, res)=> {
    const products = await productRepo.getAll();
    res.send(productTemplateIndex({products}));
});

router.get('/admin/product/new', (req, res) => {
    res.send(productTemplate({}));
})

router.post('/admin/product/new', [requireTitle, requirePrice], handleErrors(), async (req, res)=> {

    const {title, price} = req.body;
    await productRepo.create({title, price});
    res.send("submitted");


});

module.exports = router;

