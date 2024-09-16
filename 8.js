const persona = {
    nombre: "Juan Pérez",
    edad: 30,
    genero: "Masculino"
};

console.log(persona); 
console.log(persona.nombre); // Juan Pérez
console.log(persona.edad); // 30
console.log(persona.genero); // Masculino
console.log(typeof persona); // object
console.log(typeof persona.nombre); // string
console.log(typeof persona.edad); // number
console.log(typeof persona.genero); // string


const caja = {
    cuadernos: 3,
    lapices: 10,
    papel: 100,
    fotografias: 50,
    buenEstado: true
};

console.log(caja); 
console.log(caja.cuadernos); // 3
console.log(caja.lapices); // 10
console.log(caja.papel); // 100
console.log(caja.fotografias); // 50
console.log(caja.buenEstado); // true
console.log(typeof caja); // object
console.log(typeof caja.cuadernos); // number
console.log(typeof caja.lapices); // number
console.log(typeof caja.papel); // number
console.log(typeof caja.fotografias); // number
console.log(typeof caja.buenEstado); // boolean