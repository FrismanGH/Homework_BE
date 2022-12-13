import data from "testData.json";
const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
});

afterAll(async () => {
  await TestHelper.teardown();
});

describe("Testing the getList", () => {
  //Co testuju process Same
  test("getList", async () => {
    //Co testuju again Same
    let session = await TestHelper.login("AwidLicenseOwner", false, false); //Autorizace Same

    let dtoIn = {
      id: "3",
    };

    let dtoOut = {
      id: "3",
      uuAppErrorMap: {},
    };

    // let result = await TestHelper.executePostCommand("sys/uuAppWorkspace/init", dtoIn, session); //Uvozovky je URL endpointu, dtoIn je to, co posilam v insomni,
    const list = await TestHelper.executePostCommand("getList", dtoIn, session);

    for (const itemDataTry of data.createData) {
      await TestHelper.executePostCommand("getList", itemDataTry, session);
    }

    //await TestHelper.executePostCommand("shoppingList/delete", dtoIn, session); PostCommand, nebo GetCommand
    expect(list.status).toEqual(200);
    expect(list).toStrictEqual(dtoOut);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
});
