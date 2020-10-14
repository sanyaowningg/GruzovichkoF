 module.exports = {
  "Navigating to 'С нами выгоднее'" : function (browser) {
    browser
      .windowMaximize()
      .url("https://gruzovichkof.ru/akcii")
      .waitForElementVisible('body')
      .useXpath()
      .click("//*[text()='С НАМИ ВЫГОДНЕЕ!']")
      .assert.urlEquals("https://gruzovichkof.ru/akcii/s-nami-vigodnee")
      .end();
  }
};