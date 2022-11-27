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
  GetDaoFailed: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}GetDaoFailed`;
      this.message = "Dao Failed";
    }
  },
  ShoppingListDoesNotExist: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}ShoppingListDoesNotExist`;
      this.message = "Shopping List Does Not Exist";
    }
  },
  NoPermission: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}NoPermission`;
      this.message = "You dont have permission";
    }
  },
};

const GetListAddUserToList = {
  UC_CODE: `${LIST_ERROR_PREFIX}getListAddUserToList/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetListAddUserToList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const GetListRenameList = {
  UC_CODE: `${LIST_ERROR_PREFIX}getListRenameList/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetListRenameList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

const GetListCreate = {
  UC_CODE: `${LIST_ERROR_PREFIX}getListCreate/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetListCreate.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  GetDaoFailed: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}GetDaoFailed`;
      this.message = "Dao Failed";
    }
  },
  ShoppingListDoesNotExist: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}ShoppingListDoesNotExist`;
      this.message = "Shopping List Does Not Exist";
    }
  },
  NoPermission: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetList.UC_CODE}NoPermission`;
      this.message = "You dont have permission";
    }
  },
};

const GetListRemove = {
  UC_CODE: `${LIST_ERROR_PREFIX}getListRemove/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${GetListRemove.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
};

module.exports = {
  GetListRemove,
  GetListCreate,
  GetListRenameList,
  GetListAddUserToList,
  GetList,
};
