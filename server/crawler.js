// crawler of trees
const puppeteer = require("puppeteer");

module.exports = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.treenames.net/common_tree_names.html");
  await page.waitForSelector("#nameslist");
  const trees = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("td.sorting_1"));
    let result = [];
    anchors.forEach(anchor => {
      result = [...result, ...anchor.textContent.trim().split(", ")];
    });
    return result;
  });
  await browser.close();
  return trees;
};
