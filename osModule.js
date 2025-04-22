// Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.

// Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer

const os = require(`os`);

function getOSInfo() {
    const nombre = os.platform();
    const tipo = os.type();
    const version = os.version();
    const arquitectura = os.arch();
    const cpus = os.cpus().length;
    const memoriaTotalMB = (os.totalmem() / (1024 ** 2)).toFixed(2);
    const memoriaLibreMB = (os.freemem() / (1024 ** 2)).toFixed(2);

    return `Nombre: ${nombre} Tipo: ${tipo} Versión: ${version} Arquitectura: ${arquitectura} CPUs: ${cpus} MemoriaTotal: ${memoriaTotalMB} MB MemoriaLibre: ${memoriaLibreMB} MB`;
}

module.exports = getOSInfo;
