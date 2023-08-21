/**
 * Valida si los datos proporcionados de la fila son válidos según ciertos criterios.
 * @param {string} tema - El tema del libro.
 * @param {string} nombre - El nombre del libro.
 * @param {string} autor - El autor del libro.
 * @return {boolean} - Devuelve true si los datos son válidos, de lo contrario false.
 */
function esDatoFilaValido(tema, nombre, autor) {
    if (tema && nombre && autor) {
        return true;
    }
    return false;
}

/**
 * Extrae y devuelve los datos de la fila de la hoja activa según un rango dado.
 * @param {object} rango - El objeto de rango de Google Sheets.
 * @return {object} - Devuelve un objeto que contiene tema, nombre y autor.
 */
function extraerDatoFila(rango) {
    var hoja = rango.getSheet();
    var tema = hoja.getName();
    var fila = rango.getRow();
    var nombre = hoja.getRange(fila, 1).getValue();
    var autor = hoja.getRange(fila, 2).getValue();

    return {
        tema: tema,
        nombre: nombre,
        autor: autor
    };
}