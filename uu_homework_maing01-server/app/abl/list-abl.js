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
    this.dao = DaoFactory.getDao("listMain");
  }

  async getListRemove(awid, dtoIn, session) {
    let validationResult = this.validator.validate("getListRemoveDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListRemove.InvalidDtoIn
    );
    let shoppingList;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();

    shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    if (!(shoppingList.owner === uuIdentity || authorizationResult.getAuthorizedProfiles().includes("Authorities"))) {
      throw new Errors.GetListRemove.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }

    try {
      await this.dao.remove(awid, dtoIn);
    } catch {
      throw new Errors.GetListRemove.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }

  async getListCreate(awid, dtoIn, session) {
    let validationResult = this.validator.validate("getListCreateDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListCreate.InvalidDtoIn
    );

    let shoppingList;
    let dtoOut = {};

    const uuIdentity = session.getIdentity().getUuIdentity();
    try {
      dtoIn.owner = uuIdentity;
      await this.dao.create(awid, dtoIn);
      shoppingList = await this.dao.get(awid, { name: dtoIn.name });
    } catch {
      throw new Errors.GetListCreate.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!shoppingList) {
      throw new Errors.GetListCreate.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }

  async getListRenameList(awid, dtoIn, session) {
    let validationResult = this.validator.validate("getListRenameListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListRenameList.InvalidDtoIn
    );
    let shoppingList;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();

    shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    if (!(shoppingList.owner === uuIdentity || authorizationResult.getAuthorizedProfiles().includes("Authorities"))) {
      throw new Errors.GetListRenameList.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }
    shoppingList.name = dtoIn.name;
    await this.dao.update(awid, shoppingList);

    try {
      shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    } catch {
      throw new Errors.GetListRenameList.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!shoppingList) {
      throw new Errors.GetListRenameList.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }

  async getListAddUserToList(awid, dtoIn, session) {
    let validationResult = this.validator.validate("getListAddUserToListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetListAddUserToList.InvalidDtoIn
    );
    let shoppingList;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();

    shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    console.log(shoppingList);
    if (!(shoppingList.owner === uuIdentity || authorizationResult.getAuthorizedProfiles().includes("Authorities"))) {
      throw new Errors.GetListAddUserToList.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }

    shoppingList.members.push(dtoIn.members);
    await this.dao.update(awid, shoppingList);

    try {
      shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    } catch {
      throw new Errors.GetListAddUserToList.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!shoppingList) {
      throw new Errors.GetListAddUserToList.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }

  async getList(awid, dtoIn, session) {
    let validationResult = this.validator.validate("getListDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetList.InvalidDtoIn
    );

    let shoppingList;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();
    try {
      shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    } catch {
      throw new Errors.GetList.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!shoppingList) {
      throw new Errors.GetList.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    if (
      !(
        shoppingList.owner === uuIdentity ||
        shoppingList.members.include === uuIdentity ||
        authorizationResult.getAuthorizedProfiles().includes("Authorities")
      )
    ) {
      throw new Errors.GetList.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }

  async getProductChecked(awid, dtoIn) {
    let validationResult = this.validator.validate("getProductCheckedDtoInType", dtoIn);

    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.GetProductChecked.InvalidDtoIn
    );
    let shoppingList;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();

    shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    if (!(shoppingList.owner === uuIdentity || authorizationResult.getAuthorizedProfiles().includes("Authorities"))) {
      throw new Errors.GetProductChecked.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }
    shoppingList.bought = true;
    shoppingList.bought = dtoIn.bought; //jak změnit na checked?
    await this.dao.update(awid, shoppingList);

    try {
      shoppingList = await this.dao.get(awid, { id: dtoIn.id });
    } catch {
      throw new Errors.GetProductChecked.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!shoppingList) {
      throw new Errors.GetProductChecked.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
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
    let product;
    let dtoOut = {};
    const uuIdentity = session.getIdentity().getUuIdentity();
    try {
      product = await this.dao.get(awid, { id: dtoIn.id });
    } catch {
      throw new Errors.GetProduct.GetDaoFailed({ uuAppErrorMap }, { id: dtoIn.id });
    }
    if (!product) {
      throw new Errors.GetProduct.ShoppingListDoesNotExist({ uuAppErrorMap }, { id: dtoIn.id });
    }

    if (
      !(
        shoppingList.owner === uuIdentity ||
        shoppingList.members.include === uuIdentity ||
        authorizationResult.getAuthorizedProfiles().includes("Authorities")
      )
    ) {
      throw new Errors.GetProduct.NoPermission({ uuAppErrorMap }, { id: dtoIn.id });
    }

    dtoOut.uuAppErrorMap = uuAppErrorMap;
    dtoOut.shoppingList = shoppingList;
    return dtoOut;
  }
}

module.exports = new ListAbl();
