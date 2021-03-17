const {Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
(async function example() {
    let options = new chrome.Options();
    options.addArguments("--disable-notifications");
    let driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
    // let driver = await new Builder().withCapabilities(options.toCapabilities()).forBrowser('chrome').build();
    try {
    await driver.get('http://www.reddit.com');
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('reddit: the front page of the internet'), 3000);
    driver.executeScript("window.scrollBy(0,1000)");
    driver.executeScript("window.scrollBy(0,1000)");
    driver.executeScript("window.scrollBy(0,1000)");
    } finally {
    // await driver.quit();
    }
})();