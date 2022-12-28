import "../src/examples.js";

describe("Integration: examples.js", () => {
  test.concurrent("Error log", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    expect(consoleError).toHaveBeenCalledTimes(0);
  });
});
