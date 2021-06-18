const express = require("express");
const Route = express.Router();
const ProductModel = require("../models/productSchema");

//get all products
Route.get("/", async (req, res, next) => {
  try {
    const products = await ProductModel.find({});
    res.send({ success: true, data: products });
  } catch (err) {
    res.send({ success: false, message: err.message });
  }
});

//post , add new product
Route.post("/", (req, res, next) => {
  res.send("new product added");
});

module.exports = Route;
