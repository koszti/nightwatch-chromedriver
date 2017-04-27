exports.command = function (proxyApi, proxyPort, pageRef) {
  this.perform(() => {
    proxyApi.startNewPage(proxyPort, pageRef, () => {});
  });

  return this;
};
