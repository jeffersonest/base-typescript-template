import "reflect-metadata";
import MainAdapter from "../../infrastructure/adapters/main.adapter";

describe("MainAdapter", () => {
  let mainAdapter: MainAdapter;

  beforeEach(() => {
    mainAdapter = new MainAdapter();
  });

  it("should return 'Hello World' when calling getHello method", async () => {
    const result = await mainAdapter.getHello();
    expect(result).toBe("Hello World");
  });
});
