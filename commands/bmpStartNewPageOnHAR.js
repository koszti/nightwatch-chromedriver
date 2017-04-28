// Default options
const DEFAULT_BM_PROXY_PORT = 10800;

exports.command = function (bmProxyApi, pageRef, options = {}) {
  this.perform(() => {
    bmProxyApi.startNewPage(options.bmProxyPort || DEFAULT_BM_PROXY_PORT, pageRef, () => {});
  });

  return this;
};
