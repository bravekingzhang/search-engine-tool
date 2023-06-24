const {
  googleSearch,
  bingSearch,
  yahooSearch,
  duckduckgoSearch,
} = require("./searchEngines");

async function searchEngineTool(query, engine) {
  let results = [];
  switch (engine) {
    case "google":
      results = await googleSearch(query);
      break;
    case "bing":
      results = await bingSearch(query);
      break;
    case "yahoo":
      results = await yahooSearch(query);
      break;
    case "duckduckgo":
      results = await duckduckgoSearch(query);
      break;
    default:
      throw new Error("Invalid search engine specified.");
  }
  return results;
}

module.exports = searchEngineTool;
