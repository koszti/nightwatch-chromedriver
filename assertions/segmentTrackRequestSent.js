exports.assertion = function (proxyApi, proxyPort, harPageRef, eventName, msg = null) {
  this.message = msg || `Testing if segment API call sent <${eventName}>.`;
  this.expected = true;

  this.pass = value => value === this.expected;
  this.value = result => result;

  this.command = function (callback) {
    this.api.perform(() => {
      // Get the HAR file from BrowserMob that contains every network traffic log
      proxyApi.getHAR(proxyPort, (err, data) => {
        if (!err) {
          callback.call(this,

            // Search Segment API requests in  the HAR file
            JSON.parse(data).log.entries.filter((entry) => {
              let isEventInScope = false;

              // Find Segment track requests only on the required HAR page
              if (entry.pageref === harPageRef && entry.request.url.indexOf('api.segment.io/v1/t') > -1) {
                const segmentPayloadJson = entry.request.postData.text;

                // Check if segment request is the one that we are looking after
                if (JSON.parse(segmentPayloadJson).event === eventName) {
                  isEventInScope = true;
                }
              }
              return isEventInScope;

            // Return as true if at least one segment track request found
            }).length > 0);
        } else {
          throw new Error(`Cannot get HAR file from BrowserMob Proxy: ${err}`);
        }
      });
    });

    return this;
  };
};
