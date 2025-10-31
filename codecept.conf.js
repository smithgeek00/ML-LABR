exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.mercadolibre.com',
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
    }
  },
  name: 'ml'
}
