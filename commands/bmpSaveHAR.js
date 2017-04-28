const fs = require('fs');

// Default options
const DEFAULT_BM_PROXY_PORT = 10800;

exports.command = function (bmProxyApi, filename, options = {}) {
  this.perform(() => {
    bmProxyApi.getHAR(options.bmProxyPort || DEFAULT_BM_PROXY_PORT, (err, data) => {
      if (!err) {
        fs.writeFile(filename, data, (fsErr) => {
          if (err) {
            throw new Error(`Cannot create HAR file ${fsErr}`);
          }
        });
      } else {
        throw new Error(`Cannot get HAR file from BrowserMob Proxy: ${err}`);
      }
    });
  });

  return this;
};
