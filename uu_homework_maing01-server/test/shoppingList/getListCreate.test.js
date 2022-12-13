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
      name: "Kocka691",
      items: [
        { name: "jablko", bought: false, amount: "32" },
        { name: "hruska", bought: false, amount: "32" },
      ],
    };

    let dtoOut = {
      uuAppErrorMap: {},
      shoppingList: {
        awid: "22222222222222222222222222222222",
        name: "Kocka691",
        members: [],
        items: [
          {
            name: "jablko",
            bought: false,
            amount: "32",
          },
          {
            name: "hruska",
            bought: false,
            amount: "32",
          },
        ],
        owner: "6373-355-1",
        sys: {
          cts: "2022-11-27T14:44:54.253Z",
          mts: "2022-11-27T14:44:54.253Z",
          rev: 0,
        },
        id: "638377e6e5073d60787ab0dd",
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
