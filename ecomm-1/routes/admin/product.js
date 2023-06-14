const productTemplate = require('../../views/admin/product/new');
const productRepo = require('../../repository/products');
const express = require('express');
const {requireTitle, requirePrice} = require('./validators');
const {handleErrors, requireAuth} = require('../admin/middleware');
const productTemplateIndex = require('../../views/admin/product/index');
const editTemplate = require('../../views/admin/product/edit');


const router = express.Router();

router.get('/admin/product',requireAuth, async (req, res)=> {
    const products = await productRepo.getAll();
    res.send(productTemplateIndex({products}));
});

router.get('/admin/product/new', requireAuth, (req, res) => {
    res.send(productTemplate({}));
})

router.post('/admin/product/new', [requireTitle, requirePrice], 
handleErrors(productTemplate), async (req, res)=> {
    const {title, price} = req.body;
    await productRepo.create({title, price});
   res.redirect('/admin/product');
});

router.get('/admin/product/:id/edit',requireAuth,  async (req, res) => {
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

