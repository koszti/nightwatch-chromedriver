module.exports = {
  tags: ['quidco'],
  'Quidco UK Cashback' : function (client) {
    client
      .url('http://quidco.com')
      .pause(1000);

    client.expect.element('body').to.be.present;
    client.end();
  }
};