const express = require('express');
const productRepo = require('../repositories/products');
const userIndexTemplate = require('../views/products/index');

const router = express.Router();

router.get('/', async (req, res)=> {
    const products = await productRepo.getAll();
    res.send(userIndexTemplate({products}));
});

module.exports = router;