const chromedriver = require('chromedriver');
const MobProxy = require('browsermob-proxy-api');

// BrowswerMob Proxy standalone REST API (has to run individually)
const BMP_API_HOST = 'localhost';
const BMP_API_PORT = 8888;
const bmProxyApi = new MobProxy({ host: BMP_API_HOST, port: BMP_API_PORT });

// BrowserMob Proxy instance will listen on this port.
// Every chromedriver request will go through on this
// proxy to capture and analyse network traffic
const BM_PROXY_PORT = 10800;


module.exports = {
  // External before hook is ran at the beginning of the tests run
  before(done) {
    // BrowserMob Proxy is used to analyse network traffic with segment API calls
    console.log(`Creating BrowserMob Proxy instance on port ${BM_PROXY_PORT}...`);
    bmProxyApi.startPort(BM_PROXY_PORT, (err) => {
      if (!err) {
        bmProxyApi.createHAR(BM_PROXY_PORT, { initialPageRef: 'Nightwach.js Setup', captureContent: true, captureHeaders: true });
        console.log('Starting chromedriver...');
        chromedriver.start();

        done();
      } else {
        console.error('Cannot connect to BrowserMob Proxy REST API. Is it running?');
        console.error(err);
        process.exit(1);
      }
    });
  },

  // External after hook is run at the very end of the test run
  after(done) {
    console.log('Stopping chromedriver...');
    chromedriver.stop();

    console.log(`Stopping BrowserMob Proxy instance on port ${BM_PROXY_PORT}...`);
    bmProxyApi.stopPort(BM_PROXY_PORT, () => {});

    done();
  },
};
