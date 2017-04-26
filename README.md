# Nightwatch.js with chromedriver standalone

[![Build Status](http://ycoders.com:8081/buildStatus/icon?job=nightwatch-chromedriver)](http://ycoders.com:8081/job/nightwatch-chromedriver)

This is useful if you want to write End-to-End tests in Node.js quickly without a Selenium Server.

This also comes with Jenkins integration with the following features:
* Jenkins Pipeline as code (Jenkinsfile)
* Xvfb (X virtual framebuffer) integration that enables to run graphical applications (chrome) without a display
* Take screenshots as build artifacts if a test failed

### How to run the tests?

Install Node.js and then:
```sh
$ npm test
```

### Jenkins Integration

Requirements:
* Jenkins Xvfb plugin (https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin)

Additionally a Chrome/Chromium needs to be installed on the server where Jenkins is running. Any further dependencies like Chromedriver or Nightwatch.js will be installed by this package automatically.

