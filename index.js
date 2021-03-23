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
    await driver.get('https://www.reddit.com/r/nextfuckinglevel');
    // await driver.wait(until.titleIs('reddit: the front page of the internet'), 3000);
}

Max.addHandler("bang", () => {
    let randInt = Math.ceil(Math.random()*20)+6;
    if(randInt === 8) randInt = 100;
    Max.post(randInt);
    for (let i = 0; i<=20; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
});
setup();