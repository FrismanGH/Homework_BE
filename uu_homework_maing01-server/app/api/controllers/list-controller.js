"use strict";
const ListAbl = require("../../abl/list-abl.js");

class ListController {

  getListRemove(ucEnv) {
    return ListAbl.getListRemove(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }

  getListCreate(ucEnv) {
    return ListAbl.getListCreate(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }

  getListRenameList(ucEnv) {
    return ListAbl.getListRenameList(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }

  getListAddUserToList(ucEnv) {
    return ListAbl.getListAddUserToList(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }
  
  getList(ucEnv) {
    return ListAbl.getList(
      ucEnv.getUri().getAwid(),
      ucEnv.getDtoIn(),
      ucEnv.getSession(),
      ucEnv.getAuthorizationResult()
    );
  }
}

module.exports = new ListController();
