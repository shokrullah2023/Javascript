const productTemplate = require('../../views/product/new');
const productRepo = require('../../repository/products');
const express = require('express');
const {requireTitle, requirePrice} = require('./validators');
const {validationResult} = require('express-validator');

const router = express.Router();

router.get('/admin/product', (req, res)=> {

});

router.get('/admin/product/new', (req, res) => {
    res.send(productTemplate({}));
})

router.post('/admin/product/new', [requireTitle, requirePrice], async (req, res)=> {
    const errors = validationResult(req);
    console.log(errors);

    if(!errors.isEmpty()){
        return res.send(productTemplate({errors}));
    }

    const {title, price} = req.body;
    await productRepo.create({title, price});
    res.send("submitted");


});

module.exports = router;

