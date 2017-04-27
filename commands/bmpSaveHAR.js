const fs = require('fs');

exports.command = function (proxyApi, proxyPort, filename) {
  this.perform(() => {
    proxyApi.getHAR(proxyPort, (err, data) => {
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
