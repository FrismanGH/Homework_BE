"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/product-error.js");

const WARNINGS = {
  getUnsupportedKeys: {
    code: "unsupportedKeys",
  },
};


class ProductAbl {
  constructor() {
    this.validator = Validator.load();
    // this.dao = DaoFactory.getDao("product");
  }

  async getProductChecked(awid, dtoIn) {
    let validationResult = this.validator.validate("getProductCheckedDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetProductChecked.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async getProduct(awid, dtoIn) {
    let validationResult = this.validator.validate("getProductDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetProduct.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
}

module.exports = new ProductAbl();
