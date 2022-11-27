"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ProductMongo extends UuObjectDao {
  async get(awid, dtoIn) {
    let filter = {
      awid: awid,
      ...dtoIn,
    };
    return await super.findOne(filter);
  }

  async create(awid, dtoIn) {
    let filter = {
      awid: awid,
      name: dtoIn.name,
      members: [],
      items: [],
      owner: dtoIn.owner,
    };
    return await super.insertOne(filter);
  }

  async remove(awid, dtoIn) {
    let filter = {
      awid: awid,
      id: dtoIn.id,
    };
    return await super.deleteOne(filter);
  }

  async remove(awid, dtoIn) {
    let filter = {
      awid: awid,
      id: dtoIn.id,
    };
    return await super.deleteOne(filter);
  }

  async update(awid, shoppingList) {
    let filter = {
      awid: awid,
      id: shoppingList.id
    };
    return await super.findOneAndUpdate(filter, shoppingList, "NONE");
  }
}

module.exports = ProductMongo;
