const MobProxy = require('browsermob-proxy-api');

// BrowswerMob Proxy standalone REST API (has to run individually)
const BMP_API_HOST = 'localhost';
const BMP_API_PORT = 8888;
const bmProxyApi = new MobProxy({ host: BMP_API_HOST, port: BMP_API_PORT });

module.exports = {
  'Quidco - The UK #1 Cashback & Voucher Codes Site': function (client) {
    const harPageRef = 'Test Search Results View';

    client
      // Starts a new page on the existing HAR to analyse the network traffic separately
      .bmpStartNewPageOnHAR(bmProxyApi, harPageRef)

      // Navigate to the site and make a search
      .url('https://www.quidco.com/')
      .waitForElementPresent('body', 2000)
      .setValue('input[type=search]', ['hotels', client.Keys.ENTER])
      // TODO: replace pause commands to something else
      .pause(2000)
      .assert.containsText('#search-results-multiple-retailers-title', 'Search results for hotels')
      .pause(2000)

      // Check if the segment API request sent correctly
      .assert.segmentTrackRequestSent(bmProxyApi, 'Merchant Search Results Viewed', { harPageRef })
      .end();
  },
};
