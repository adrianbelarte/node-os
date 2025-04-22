//interfaz
const os = require(`os`);
//Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.


// Ejemplo de output: Interfaz lo0: Familia: IPv4 Dirección: 127.0.0.1 
// Interno: true Familia: IPv6 Dirección: ::1 Interno: true Familia: IPv6 
// Dirección: fe80::1 Interno: true

function getNetworkInfo() {
    const interfaces = os.networkInterfaces();
    const resultados = [];
  
    for (const [nombreInterfaz, detalles] of Object.entries(interfaces)) {
      let linea = `Interfaz ${nombreInterfaz}:`;
      detalles.forEach((detalle) => {
        linea += ` Familia: ${detalle.family} Dirección: ${detalle.address} Interno: ${detalle.internal}`;
      });
      resultados.push(linea);
    }

    return resultados.join('\n');
}

module.exports = getNetworkInfo;