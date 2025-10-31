Feature('Buscar PlayStation 5 en Mercado Libre');
Scenario('Buscar y filtrar PlayStation 5', async ({ I }) => {
  
// 1: entrar al sitio
  I.amOnPage('https://www.mercadolibre.com');
  I.wait(2);
  I.saveScreenshot('01_inicio.png');

// 2: Selecciona MX
I.waitForText('México', 5);
I.click('text=México');
  I.saveScreenshot('02_mx.png');


// 3: Buscar "playstation 5"
  I.fillField('#cb1-edit', 'playstation 5');
  I.click('button[type="submit"]');
  I.wait(3);
  I.saveScreenshot('03_busqueda.png');
  
  // 4: Filtrar por "Nuevo"
  I.executeScript(() => window.scrollBy(0, 400));
  I.click('//span[text()="Nuevo"]');
  I.wait(3);
  I.saveScreenshot('04_filtro_nuevo.png');
   
  //5: CDMX
   I.scrollTo('//h3[contains(text(),"Origen del envío")]');
  I.wait(1);
  I.click('//span[contains(text(),"Local")]');
  I.wait(3);
  I.saveScreenshot('05_filtro_cdmx.png');

//6: Menor to Mayor
 I.scrollPageToTop();
  I.wait(1);
I.click('//span[contains(text(),"Más relevantes")]');
  I.wait(1);
  I.click('//span[contains(text(),"Mayor precio")]');
  I.wait(3);
  I.saveScreenshot('06_ordenado.png');


// 7: Obtener primeros 5 productos
console.log(' Nombre y Precio \n');
I.wait(2);

// Obtener nombres
let productos = await I.grabTextFromAll('//a[@class="poly-component__title"]');

// Obtener precios
let precio1 = await I.grabTextFrom('(//span[@class="andes-money-amount__fraction"])[1]');
let precio2 = await I.grabTextFrom('(//span[@class="andes-money-amount__fraction"])[2]');
let precio3 = await I.grabTextFrom('(//span[@class="andes-money-amount__fraction"])[3]');
let precio4 = await I.grabTextFrom('(//span[@class="andes-money-amount__fraction"])[4]');
let precio5 = await I.grabTextFrom('(//span[@class="andes-money-amount__fraction"])[5]');

// Imprimir en la misma línea
console.log('\n    PRODUCTO Y PRECIO  \n');
console.log('1. ' + productos[0] + ' , $' + precio1);
console.log('2. ' + productos[1] + ' , $' + precio2);
console.log('3. ' + productos[2] + ' , $' + precio3);
console.log('4. ' + productos[3] + ' , $' + precio4);
console.log('5. ' + productos[4] + ' , $' + precio5);
console.log('\n    TERMINADO  \n');
I.saveScreenshot('07_productos.png');

});
