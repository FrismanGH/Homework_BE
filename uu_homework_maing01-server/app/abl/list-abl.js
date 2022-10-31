"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/list-error.js");

const WARNINGS = {
  getUnsupportedKeys: {
    code: "unsupportedKeys",
  },
};

class ListAbl {
  constructor() {
    this.validator = Validator.load();
    // this.dao = DaoFactory.getDao("list");
  }

  async getList(awid, dtoIn) {
    let validationResult = this.validator.validate("getListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetList.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
}

module.exports = new ListAbl();
