const puppeteer = require("puppeteer");

async function googleSearch(query) {
  try {
    //https://serpapi.com/search-api
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://www.google.com.hk/search?q=${encodeURIComponent(
        query
      )}&oq=${encodeURIComponent(
        query
      )}&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&hl=en&gl=us&sourceid=chrome&ie=UTF-8%22#ip=1`
    );
    const summaries = await page.evaluate(() => {
      const liElements = Array.from(
        document.querySelector("#search > div > div").childNodes
      );
      const firstFiveLiElements = liElements.slice(0, 5);
      return firstFiveLiElements.map((li) => {
        const linkElement = li.querySelector("a");
        const href = linkElement.getAttribute("href");
        const title = linkElement.querySelector("a > h3").textContent;
        const abstract = Array.from(
          li.querySelectorAll("div > div > div > div > div > div > span")
        )
          .map((e) => e.textContent)
          .join("");
        return { href, title, abstract };
      });
    });
    await browser.close();
    console.log(summaries);
    return summaries;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function bingSearch(query) {
  try {
    //https://serpapi.com/bing-search-api
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://www.bing.com/search?form=QBRE&q=${encodeURIComponent(
        query
      )}&cc=US`
    );
    const summaries = await page.evaluate(() => {
      const liElements = Array.from(
        document.querySelectorAll("#b_results > .b_algo")
      );
      const firstFiveLiElements = liElements.slice(0, 5);
      return firstFiveLiElements.map((li) => {
        const abstractElement = li.querySelector(".b_caption > p");
        const linkElement = li.querySelector("a");
        const href = linkElement.getAttribute("href");
        const title = linkElement.textContent;

        const abstract = abstractElement ? abstractElement.textContent : "";
        return { href, title, abstract };
      });
    });
    await browser.close();
    console.log(summaries);
    return summaries;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function yahooSearch(query) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://search.yahoo.com/search?p=${encodeURIComponent(
        query
      )}&ei=UTF-8&fr=fp-tts`
    );
    const summaries = await page.evaluate(() => {
      const liElements = Array.from(
        document.querySelector(".searchCenterMiddle").childNodes
      );
      const firstFiveLiElements = liElements.slice(0, 5);
      return firstFiveLiElements.map((li) => {
        const compTextElement = li.querySelector(".compText");
        const linkElement = li.querySelector("a");
        const href = linkElement.getAttribute("href");
        const title = linkElement.getAttribute("aria-label");

        const abstract = compTextElement ? compTextElement.textContent : "";
        return { href, title, abstract };
      });
    });
    await browser.close();
    return summaries;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

async function duckduckgoSearch(query) {
  try {
    //https://serpapi.com/duckduckgo-search-api
    // 可以改区域，这些设置的是港区
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://duckduckgo.com/?q=${encodeURIComponent(query)}&kl=hk-tzh&ia=web`
    );
    const summaries = await page.evaluate(() => {
      const liElements = Array.from(
        document.querySelectorAll("#react-layout ol li")
      );
      const firstFiveLiElements = liElements.slice(0, 5);
      return firstFiveLiElements.map((li) => {
        const abstractElement = li
          .querySelector("div:nth-child(3)")
          .querySelector("div");
        const linkElement = li
          .querySelector("div:nth-child(2)")
          .querySelector("a");
        const href = linkElement.getAttribute("href");
        const title = linkElement.textContent;

        const abstract = abstractElement ? abstractElement.textContent : "";
        return { href, title, abstract };
      });
    });
    await browser.close();
    console.log(summaries);
    return summaries;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

module.exports = {
  googleSearch,
  bingSearch,
  yahooSearch,
  duckduckgoSearch,
};
