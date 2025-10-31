* Automatización Mercado Libre - PlayStation 5 - LABR

Proyecto de automatización de pruebas para búsqueda de PlayStation 5 en Mercado Libre México usando **CodeceptJS** , **Playwright** Y reporte con **Allure**
 
** Descripción

Este proyecto automatiza el siguiente flujo:

1. Entrar al sitio web de Mercado Libre
2. Seleccionar México como país
3. Buscar "PlayStation 5"
4. Filtrar por condición "Nuevos"
5. Filtrar por ubicación "CDMX" (Local)
6. Ordenar por "Mayor precio"
7. Obtener los primeros 5 productos con sus precios
8. Imprimir resultados en consola
9. Generar screenshots de cada paso
10. Genera reporte con allure

## Tecnologías

- **CodeceptJS** v3.7.5
- **Playwright** (Chromium)
- **Node.js** v18+
- **Allure** 

** Estructura del Proyecto
-
ML-LABR/
├── tests/
│   └── buscar_playstation_test.js     # Test principal
├── output/ 
output/allure-report
output/allure-results                      # Screenshots generados y reporte
├── codecept.conf.js                   # Configuración
├── package.json                       # Dependencias
└── README.md                          # Instrucciones

* Instalación
### Requisitos Previos

- Node.js v18 o superior
- npm v8 o superior

* Pasos de Instalación

1. **Clonar el repositorio**
---bash
git clone https://github.com/smithgeek00/ML-LABR.git
cd ML-LABR
---

2. **Instalar dependencias**
---bash
npm install
---

3. **Instalar navegadores de Playwright** (primera vez)
---bash
npx playwright install chromium
---

## ▶️ Ejecución

### Ejecutar el test
---bash
npm test
---

### Ejecutar con más detalles (verbose)
---bash
npx codeceptjs run --steps --verbose
---

** Resultados **

### Ejecutar Reporte (allure)

$ npx allure generate output/allure-results --clean -o output/allure-report
Report successfully generated to output\allure-report

$ npx allure open output/allure-report

### Consola

El test imprime en consola los 5 productos encontrados:
```

    PRODUCTO Y PRECIO  


1. Consola Ps5 30 Aniversario Digital + Portal + Dual + Edge 1t Gris | $45,000
2. Playstation 5 Sony Bundle 30 Aniv + Portal + Edge + Dual Gris | $45,000
3. Playstation 5 Sony Paquete 30 Aniv + Portal + Edge + Dual Gris | $45,000
...
```

### Screenshots

Los screenshots se guardan automáticamente en la carpeta `output/`:

- `01_inicio.png` - Página inicial
- `02_mx.png` - País seleccionado (México)
- `03_busqueda.png` - Búsqueda de "PlayStation 5"
- `04_filtro_nuevo.png` - Filtro "Nuevos" aplicado
- `05_filtro_cdmx.png` - Filtro ubicación "Local" (CDMX)
- `06_ordenado.png` - Ordenamiento por mayor precio
- `07_productos.png` - Primeros 5 productos capturados

## Características Implementadas

*- Navegación automatizada  
*- Aplicación de múltiples filtros  
*- Extracción de datos (títulos y precios)  
*- Screenshots automáticos en cada paso  
*- Reportes en consola con formato  
*- Manejo de esperas explícitas  
*- Código limpio y comentado
*- Reporte final con allure 


##  Notas

- El test está configurado para ejecutarse en modo **headed** (con interfaz visible)
- Los filtros pueden variar según la disponibilidad en Mercado Libre
- El proyecto usa XPath para selectores más robustos
- Tiempo aproximado de ejecución: 30-40 segundos

## Troubleshooting

### Error: "Cannot find module codeceptjs"
```bash
npm install
```

### Error: "Playwright browser not found"
```bash
npx playwright install chromium
```

### El test no encuentra elementos
- Verifica que Mercado Libre esté disponible
- Los selectores pueden cambiar si el sitio se actualiza
- Aumenta los tiempos de espera en caso de conexión lenta

## Autor

Desarrollado como parte del Take Home Challenge de automatización de pruebas, por Luis Alberto Barcenas Reséndiz.

---

**Fecha de creación:** Octubre 2025  
**Versión:** 1.0.0
