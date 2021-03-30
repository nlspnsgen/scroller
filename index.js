const {Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const Max = require('max-api');


let options = new chrome.Options();
options.addArguments("--disable-notifications");
let driver = new Builder()
.forBrowser("chrome")
.setChromeOptions(options)
.build();
let windows = [];
// Broken record
const setup = async () => {
    await driver.get('https://www.reddit.com/r/nextfuckinglevel');
    makeWindows();
}   

const makeWindows = async () => {
    await driver.switchTo().newWindow('window');
    await driver.get('https://www.reddit.com/r/nextfuckinglevel');
    for (let i = 0; i<=200; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
    await driver.switchTo().newWindow('window');
    await driver.get('https://www.reddit.com/r/nextfuckinglevel');
    for (let i = 0; i<=300; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
    await driver.switchTo().newWindow('window');
    await driver.get('https://www.reddit.com/r/nextfuckinglevel');
    for (let i = 0; i<=100; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
    windows = await driver.getAllWindowHandles();
    Max.post("WINDOWS INIT", windows);
    Max.outletBang();
}

const scrollOnRandomWindow = async () => {
    let randomInt =  Math.ceil(Math.random()*4)-1;
    let handle = windows[randomInt];
    Max.post("windows: " + windows);
    Max.post("currentHandle: ", handle);
    await driver.switchTo().window(handle);
    for (let i = 0; i<=15; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
}

Max.addHandler("bang", () => {
    Max.post("bang received");
    scrollOnRandomWindow();
});

setup();