const productTemplate = require('../../views/product/new');
const productRepo = require('../../repository/products');
const express = require('express');
const {requireTitle, requirePrice} = require('./validators');
const {handleErrors} = require('../admin/middleware');
const productTemplateIndex = require('../../views/product/index');
const editTemplate = require('../../views/product/edit');


const router = express.Router();

router.get('/admin/product', async (req, res)=> {
    const products = await productRepo.getAll();
    res.send(productTemplateIndex({products}));
});

router.get('/admin/product/new', (req, res) => {
    res.send(productTemplate({}));
})

router.post('/admin/product/new', [requireTitle, requirePrice], 
handleErrors(productTemplate), async (req, res)=> {
    const {title, price} = req.body;
    await productRepo.create({title, price});
    res.send("submitted");
});

router.get('/admin/product/:id/edit', async (req, res) => {
    const product = await productRepo.getOne(req.params.id);
    res.send(editTemplate({product}));
});

router.post('/admin/product/:id/edit', [requireTitle, requirePrice], handleErrors(editTemplate, async req =>{
    const product = await productRepo.getOne(req.params.id);
    return {product};
}), async (req, res) => {
    const changes = req.body;
    await productRepo.update(changes, req.params.id);
    res.redirect('/admin/product');
})

module.exports = router;

