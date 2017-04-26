module.exports = {
  'Quidco - The UK #1 Cashback & Voucher Codes Site' : function (client) {
    client
      .url('https://www.quidco.com/')
      .waitForElementPresent('body', 2000)
      .setValue('input[type=search]', ['hotels', client.Keys.ENTER])
      .pause(5000)
      .assert.containsText('#search-results-multiple-retailers-title', 'Search results for hotels')
      .end();
  }
};