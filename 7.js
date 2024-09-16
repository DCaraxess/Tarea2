function sumarArray(arr) {
    return arr.reduce((suma, numero) => suma + numero, 0);
}

function promedioArray(arr) {
    if (arr.length === 0) return 0;
    const suma = sumarArray(arr);
    return suma / arr.length;
}

function convertirAMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}

function filtrarPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5];
console.log("Suma del array:", sumarArray(numeros)); 
console.log("Promedio del array:", promedioArray(numeros)); 

const palabras = ["hola", "mundo", "javascript"];
console.log("Array en mayúsculas:", convertirAMayusculas(palabras)); 

console.log("Números pares:", filtrarPares(numeros)); 


console.log("\nEjemplo de push() y pop():");
console.log("Array original:", numeros);

numeros.push(6);
console.log("Después de push(6):", numeros);

numeros.pop();
console.log("Después de pop():", numeros);