const express = require("express");
// const {validationResult} = require('express-validator');
const ProductRepo = require("../../repositories/products");
const ProductsNewTemplate = require("../../views/admin/products/new");
const productEditTemplate = require("../../views/admin/products/edit");
const { requireTitle, requirePrice } = require("./validators");
const renderedProduct = require("../../views/admin/products/index");
const multer = require("multer");
const { handleErrors, requireAuth } = require("./middlewares");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/admin/products", requireAuth, async (req, res) => {
  const products = await ProductRepo.getAll();
  res.send(renderedProduct({ products }));
});
router.get("/admin/products/new", requireAuth, (req, res) => {
  res.send(ProductsNewTemplate({ req }));
});

router.get("/admin/products/:id/edit", requireAuth, async (req, res) => {
  const product = await ProductRepo.getOne(req.params.id);

  if (!product) {
    return res.send("Product not found");
  }

  return res.send(productEditTemplate({ product }));
});

router.post(
  "/admin/products/:id/edit",
  requireAuth,
  upload.single("image"),
  // ,async req => {
  //     const product = ProductRepo.getOne(req.params.id);
  //     return {product};
  // }
  handleErrors(ProductsNewTemplate),
  [requireTitle, requirePrice],
  async (req, res) => {
    const changes = req.body;

    if (req.file) {
      changes.image = req.file.buffer.toString("base64");
    }

    try {
      await ProductRepo.update(req.params.id, changes);
    } catch (err) {
      return res.send("Could not find item");
    }
    res.redirect("/admin/products");
  }
);

router.post(
  "/admin/products/new",
  requireAuth,
  upload.single("image"),
  handleErrors(ProductsNewTemplate),
  [requireTitle, requirePrice],
  async (req, res) => {
    // const errors = validationResult(req);

    // if(!errors){
    //     return res.send(ProductsNewTemplate({errors}));
    // }
    // req.on('data', (data)=> {
    //     console.log(data.toString());
    // })
    const image = req.file.buffer.toString("base64");
    const { title, price } = req.body;
    await ProductRepo.create({ title, price, image });

    res.redirect("/admin/products");
  }
);

router.post("/admin/products/:id/delete", requireAuth, async (req, res) => {
  await ProductRepo.delete(req.params.id);
  res.redirect("/admin/products");
});

module.exports = router;
