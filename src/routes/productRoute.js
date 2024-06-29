const express = require("express");
import * as productController from '../controllers';

const router = express.Router();


router.get("/", productController.getAllProducts);
router.get("/categories", productController.getProductCategories);
router.get("/category/:category", productController.getProductsInCategory);
router.get("/:id", productController.getProduct);
router.post("/", productController.addProduct);
router.put("/:id", productController.editProduct);
router.patch("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
