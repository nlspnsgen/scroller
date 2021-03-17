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
    try {
        await driver.get('http://www.reddit.com');
        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('reddit: the front page of the internet'), 3000);
        } finally {
        }
}
Max.addHandler("bang", () => {
    total_height = driver.executeScript("return document.body.scrollHeight");
    
    Max.post(total_height);
    for (let i = 0; i<=100; i++){
        driver.executeScript("window.scrollBy(0,10)");
    }

	// driver.xecuteScript("window.scrollBy(0,1000)");
});
setup();