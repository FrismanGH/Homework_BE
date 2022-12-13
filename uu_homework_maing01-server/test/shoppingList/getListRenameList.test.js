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

describe("Testing the getListRenameList", () => {
  test("getListRenameList", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {
      id: "638368f099b7c7381c34f8aa",
      name: "Mam Rad kočky",
    };

    let dtoOut = {
      uuAppErrorMap: {},
      shoppingList: {
        awid: "22222222222222222222222222222222",
        name: "Mam Rad kočky",
        members: ["13"],
        items: [],
        owner: "6373-355-1",
        sys: {
          cts: "2022-11-27T13:41:04.010Z",
          mts: "2022-11-27T14:21:25.784Z",
          rev: 2,
        },
        id: "638368f099b7c7381c34f8aa",
      },
    };

    let result = await TestHelper.executePostCommand("getListRenameList", dtoIn, session);

    for (const itemDataTry of data.createData) {
      const created = await TestHelper.executePostCommand("getListRenameList", itemDataTry, session);
    }

    expect(result.status).toEqual(200);
    expect(result).toStrictEqual(dtoOut);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
});
