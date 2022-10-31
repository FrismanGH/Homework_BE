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

  async getListRemove(awid, dtoIn) {
    let validationResult = this.validator.validate("getListRemoveDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListRemove.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async getListCreate(awid, dtoIn) {
    let validationResult = this.validator.validate("getListCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListCreate.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async getListRenameList(awid, dtoIn) {
    let validationResult = this.validator.validate("getListRenameListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListRenameList.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }

  async getListAddUserToList(awid, dtoIn) {
    let validationResult = this.validator.validate("getListAddUserToListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListAddUserToList.InvalidDtoIn
    );
    let dtoOut = { ...dtoIn };
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
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
