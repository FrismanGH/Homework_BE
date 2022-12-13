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
  test("getListAddUserToList", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {
      id: "63836bff400ccc48444db294",
    };

    let dtoOut = {
      uuAppErrorMap: {},
      shoppingList: {
        awid: "22222222222222222222222222222222",
        name: "Kocka69",
        members: [],
        items: [],
        owner: "6373-355-1",
        sys: {
          cts: "2022-11-27T13:54:07.965Z",
          mts: "2022-11-27T13:54:07.965Z",
          rev: 0,
        },
        id: "63836bff400ccc48444db294",
      },
    };

    let result = await TestHelper.executePostCommand("getListAddUserToList", dtoIn, session);

    for (const itemDataTry of data.createData) {
      const created = await TestHelper.executePostCommand("getListAddUserToList", itemDataTry, session);
    }

    expect(result.status).toEqual(200);
    expect(result).toStrictEqual(dtoOut);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
});
