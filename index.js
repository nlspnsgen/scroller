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
    await driver.get('https://lookbook.nu/');
    await driver.switchTo().newWindow('window');
    await driver.get('https://reddit.com/r/videos');
    await driver.switchTo().newWindow('window');
    await driver.get('https://reddit.com/');
    windows = await driver.getAllWindowHandles();
    Max.post("WINDOWS INIT", windows);
}

const scrollOnRandomWindow = async () => {
    let randomInt =  Math.ceil(Math.random()*4)-1;
    let handle = windows[randomInt];
    Max.post("windows: " + windows);
    Max.post("currentHandle: ", handle);
    await driver.switchTo().window(handle);
    for (let i = 0; i<=20; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }
}

Max.addHandler("bang", () => {
    Max.post("bang received");
    scrollOnRandomWindow();
});

Max.addHandler("myEvent", (msg) => {
    Max.post("MESSAGE: " + msg);
})
setup();