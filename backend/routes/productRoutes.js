import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  getProduct,
  deletedProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deletedProduct);

export default router;
