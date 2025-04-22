//Deberás "importar" o "requerir" osModule.js y networkModule.js en el archivo systemInfo.js 
const getOSInfo = require('./osModule');
const getNetworkInfo = require('./networkModule');
// Aquí es donde estará toda la información para imprimir en la terminal.

console.log('--- Información del sistema ---');
console.log(getOSInfo());
console.log('\n--- Información de red ---');
console.log(getNetworkInfo());