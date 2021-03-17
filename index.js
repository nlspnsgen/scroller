const {Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const Max = require('max-api');


let options = new chrome.Options();
options.addArguments("--disable-notifications");
let driver = new Builder()
.forBrowser("chrome")
.setChromeOptions(options)
.build();

const setup = async () => {
    await driver.get('http://www.reddit.com');
    await driver.wait(until.titleIs('reddit: the front page of the internet'), 3000);
}

Max.addHandler("bang", () => {
        for (let i = 0; i<=10; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
});
setup();