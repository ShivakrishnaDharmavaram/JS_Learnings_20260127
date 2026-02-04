const { chromium } = require('playwright');

chromium.launch()
  .then(browser => browser.newPage())
  .then(page => page.goto('https://example.com/login'))
  .then(page => page.fill('#username', 'testuser'))
  .then(page => page.fill('#password', 'testpass'))
  .then(page => page.click('#loginButton'))
  .then(() => console.log('Login test executed'))
  .catch(error => console.error('Test failed:', error));
