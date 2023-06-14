const productRepo = require('../repository/products');
const express = require('express');
const productTemplate = require('../views/product/index');

const router = express.Router();

router.get('/', async(req, res)=> {
    const products = await productRepo.getAll();
    res.send(productTemplate({products}));
})

module.exports = router;