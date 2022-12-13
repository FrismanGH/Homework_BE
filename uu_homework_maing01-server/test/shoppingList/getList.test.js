const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGALL" });
});

afterAll(async () => {
  await TestHelper.teardown();
});

describe("Testing the getList", () => {
  test("getList", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false); //Autorizace Same

    let dtoIn = {
      id: "6383534461eff30c2933604e",
    };

    let dtoOut = {
      uuAppErrorMap: {},
      shoppingList: {
        name: "Radek",
        owner: "6373-355-1",
        members: ["6373-355-1", "6373-355-1"],
        items: [
          {
            id: "2",
            name: "Kukurice",
            checkedInList: true,
            amount: "312",
          },
        ],
        awid: "22222222222222222222222222222222",
        id: "6383534461eff30c2933604e",
      },
    };

    let list = await TestHelper.executePostCommand("getList", dtoIn, session);

    expect(list.status).toEqual(200);
    expect(list).toStrictEqual(dtoOut);
  });
});
