import * as lib from "../src/index.js";

describe("Integration: index.js", () => {
  test.concurrent("Import library", async () => {
    expect(lib).toBeDefined();
  });

  test.concurrent("Error log", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    expect(consoleError).toHaveBeenCalledTimes(0);
  });
});
