const searchEngineTool = require("./searchEngineTool");

describe("searchEngineTool", () => {
  test("should return search results from google", async () => {
    const query = "麦苗莹";
    const engine = "google";

    const results = await searchEngineTool(query, engine);

    expect(results).toHaveLength(5);
    results.forEach((result) => {
      expect(result).toHaveProperty("href");
      expect(result).toHaveProperty("title");
      expect(result).toHaveProperty("abstract");
      //   expect(result.href).not.toBeNull();
      //   expect(result.title).not.toBeNull();
      //   expect(result.abstract).not.toBeNull();
      expect(result.href).not.toBe("");
      expect(result.title).not.toBe("");
      expect(result.abstract).not.toBe("");
    });
  });

  test("should return search results from bing", async () => {
    const query = "麦苗莹";
    const engine = "bing";

    const results = await searchEngineTool(query, engine);

    expect(results).toHaveLength(5);
    results.forEach((result) => {
      expect(result).toHaveProperty("href");
      expect(result).toHaveProperty("title");
      expect(result).toHaveProperty("abstract");
      //   expect(result.href).not.toBeNull();
      //   expect(result.title).not.toBeNull();
      //   expect(result.abstract).not.toBeNull();
      expect(result.href).not.toBe("");
      expect(result.title).not.toBe("");
      expect(result.abstract).not.toBe("");
    });
  });

  test("should return search results from yahoo", async () => {
    const query = "麦苗莹";
    const engine = "yahoo";

    const results = await searchEngineTool(query, engine);

    expect(results).toHaveLength(5);
    results.forEach((result) => {
      expect(result).toHaveProperty("href");
      expect(result).toHaveProperty("title");
      expect(result).toHaveProperty("abstract");
      expect(result.href).not.toBe("");
      expect(result.title).not.toBe("");
      expect(result.abstract).not.toBe("");
    });
  });
  test("should return search results from duckduckgo", async () => {
    const query = "麦苗莹";
    const engine = "duckduckgo";

    const results = await searchEngineTool(query, engine);

    expect(results).toHaveLength(5);
    results.forEach((result) => {
      expect(result).toHaveProperty("href");
      expect(result).toHaveProperty("title");
      expect(result).toHaveProperty("abstract");
      //   expect(result.href).not.toBeNull();
      //   expect(result.title).not.toBeNull();
      //   expect(result.abstract).not.toBeNull();
      expect(result.href).not.toBe("");
      expect(result.title).not.toBe("");
      expect(result.abstract).not.toBe("");
    });
  });

  test("should throw an error for invalid search engine", async () => {
    const query = "test query";
    const engine = "invalid_engine";

    await expect(searchEngineTool(query, engine)).rejects.toThrow(
      "Invalid search engine specified."
    );
  });
});
