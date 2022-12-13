const { TestHelper } = require("uu_appg01_server-test");
const { data } = require("./testData.json");

beforeAll(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGALL" });
});

afterAll(async () => {
  await TestHelper.teardown();
});

describe("Testing the getListAddUserToList", () => {
  test("getListAddUserToListHDS", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoInList = {
      name: "Nakup",
      items: [],
    };

    let sum = await TestHelper.executePostCommand("getListCreate", dtoInList, session);

    let dtoIn = {
      id: sum.shoppingList.data.id,
      members: "13",
    };
    console.log(sum.shoppingList);
    let dtoOut = {
      uuAppErrorMap: {},
      shoppingList: {
        awid: "22222222222222222222222222222222",
        name: "Nakup",
        members: ["13"],
        items: [],
        owner: "6373-355-1",
        id: sum.shoppingList.data.id,
      },
    };

    let result = await TestHelper.executePostCommand("getListAddUserToList", dtoIn, session);
    delete result.shoppingList.sys;
    console.log(result);
    // for (const itemDataTry of data.createData) {
    //   const created = await TestHelper.executePostCommand("getListAddUserToList", itemDataTry, session);
    // }

    expect(result.status).toEqual(200);
    expect(result).toEqual(dtoOut);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
});
