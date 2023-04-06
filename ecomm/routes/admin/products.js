const express = require('express');
const {validationResult} = require('express-validator');
const ProductRepo = require('../../repositories/products');
const ProductsNewTemplate = require('../../views/admin/products/new');
const {requireTitle, requirePrice} = require('./validators');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })

router.get('/admin/products', (req, res)=> {});
router.get('/admin/products/new', (req, res)=>{
    res.send(ProductsNewTemplate({req}));
});
 
router.post('/admin/products/new', upload.single('image'), [requireTitle, requirePrice], 
async (req, res)=> {
    const errors = validationResult(req);

    if(!errors){
        return res.send(ProductsNewTemplate({errors}));
    }
    // req.on('data', (data)=> {
    //     console.log(data.toString());
    // })
    const image = req.file.buffer.toString('base64');
    const {title, price} = req.body;
    await ProductRepo.create({title, price, image}); 
    res.send('Submitted'); 
})

module.exports = router;