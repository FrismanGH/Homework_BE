"use strict";
const ProductAbl = require("../../abl/product-abl.js");
//tady budou všechny CRUD endpointy, z mapping to linkuje sem, pokud změnit nazev tak tady i v mappings,

class ProductController {

  getProductChecked(ucEnv) {
    return ProductAbl.getProductChecked(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }
  getProduct(ucEnv) {
    return ProductAbl.getProduct(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }
}

module.exports = new ProductController();
