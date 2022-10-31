"use strict";

const ProductMainUseCaseError = require("./product-main-use-case-error.js");
const PRODUCT_ERROR_PREFIX = `${ProductMainUseCaseError.ERROR_PREFIX}product/`;

const GetProduct = {
  UC_CODE: `${PRODUCT_ERROR_PREFIX}getProduct/`,

  InvalidDtoIn: class extends ProductMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetProduct.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const GetProductChecked = {
  UC_CODE: `${PRODUCT_ERROR_PREFIX}getProductChecked/`,
  
  InvalidDtoIn: class extends ProductMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetProductChecked.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid. 1337";
    }
  },
};

module.exports = {
  GetProductChecked,
  GetProduct,
};
