"use strict";

const ListMainUseCaseError = require("./list-main-use-case-error.js");
const LIST_ERROR_PREFIX = `${ListMainUseCaseError.ERROR_PREFIX}list/`;

const GetList = {
  UC_CODE: `${LIST_ERROR_PREFIX}getList/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

module.exports = {
  GetList,
};
