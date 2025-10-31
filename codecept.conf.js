exports.config = {
  tests: './tests/*.js',            // Ruta de tus archivos de prueba
  output: './output',               // Carpeta donde se guardan screenshots y reportes
  helpers: {
    Playwright: {
      url: 'https://www.mercadolibre.com', // URL base
      show: true,                          // Muestra el navegador al ejecutar
      browser: 'chromium',                 // Navegador a usar
      windowSize: '1920x1080',             // Tamaño de ventana
    }
  },

  include: {},                   // Aquí puedes incluir tus Page Objects o Steps (opcional)
  plugins: {
    // 🔹 Habilita Allure para generar reportes detallados con evidencias
    allure: {
      enabled: true,                              // Activa el plugin
      require: '@codeceptjs/allure-legacy',       // Usa la versión compatible con CodeceptJS
      outputDir: 'output/allure-results',         // Carpeta donde se guardan los resultados brutos
      screenshots: true,                          // Toma screenshots automáticas
      fullPageScreenshots: true,                  // Captura la página completa
      screenshotOnFail: true,                     // Captura en caso de error
      stepByStepReport: true                      // Incluye pasos detallados en el reporte
    }
  },

  name: 'ml'   // Nombre del proyecto (puedes ponerle otro si deseas)
};
