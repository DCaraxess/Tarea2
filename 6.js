function convertirAMayusculas(str) {
    return str.toUpperCase();
}

function convertirAMinusculas(str) {
    return str.toLowerCase();
}

function restarNumeros(num1, num2) {
    return num1 - num2;
}

function dividirNumeros(num1, num2) {
    if (num2 === 0) {
        return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
}

function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}

function obtenerLongitudString(str) {
    return str.length;
}

console.log(convertirAMayusculas("hola mundo")); 
console.log(convertirAMinusculas("HOLA MUNDO")); 
console.log(restarNumeros(10, 5)); 
console.log(dividirNumeros(10, 2)); 
console.log(dividirNumeros(10, 0)); 
console.log(multiplicarNumeros(5, 3)); 
console.log(obtenerLongitudString("JavaScript")); 