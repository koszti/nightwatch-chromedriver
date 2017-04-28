# Segment analytics.js - Automated testing custom track events

[![Build Status](http://ycoders.com:8081/buildStatus/icon?job=nightwatch-chromedriver)](http://ycoders.com:8081/job/nightwatch-chromedriver)

Segment analytics.js (https://segment.com/docs/sources/website/analytics.js/) makes it dead simple to send your data to any tool without having to learn, test or implement a new API every time in the Segment platform. (https://segment.com)

This project gives the capabilites to write End-to-End tests quickly in Node.js quickly without a Selenium Server. It is using Nightwatch.js and Chromedriver to simulate user interactions and BrowserMob Proxy to analyze the network traffic and validate the request payload sent by Segment analytics.js.

Custom Nightwatch.js assertion:
* `.segmentTrackRequestSent()` - Checks if the given custom track event sent to segment and validates the HTTP Request Payload against a JSON schema
Parameters:

| Name          | Type          | Description                          |
| ------------- | ------------- | ------------------------------------ |
| bmProxy       | object        | BrowserMob Proxy instance            |
| event         | string        | The name of the event you’re testing |
| options       | object        | Extra options:  ***validatePayload***: Whether or not the payload should validate against the corresponding JSON schema. Default is TRUE. Valid schemas are defined in `assertions/payload-schemas` directory. |

Check working example in `test/quidco-analytics.js`.

### How to run the tests?

Install Node.js and then:
```sh
$ npm install && npm test
```

### Bitbucket Pipelines Integration

In progress. It will install and run everthing in a Docker image from a `bitbucket-pipelines.yml` file.

### Jenkins Integration

If you want to run the test on a pre-install Jenkins server you will need this section.

Features:
* Jenkins Pipeline as code (Jenkinsfile)
* Xvfb (X virtual framebuffer) integration that enables to run graphical applications (chrome) without a display
* Take screenshots as build artifacts if a test failed

Pre-requirements:
* Jenkins Xvfb plugin (https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin)
* Chrome/Chromium (https://www.google.co.uk/chrome) - Only chromedriver included in the project and you still need to have a pre-installed browser
* BrowserMob Proxy (https://bmp.lightbody.net/) - To analyze the network traffic and the payload body of a HTTP Requests

Any further dependencies like Chromedriver or Nightwatch.js will be installed by this package automatically.

### Bitbucket Pipelines Integration
