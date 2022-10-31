"use strict";
const ListAbl = require("../../abl/list-abl.js");

class ListController {
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
