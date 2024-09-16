console.log('numeros del 1 al 10')
for(i=0; i<=10; i++){
    console.log(i)
    
}
console.log('numeros del 10 al 1')
for(i=10; i>=0; i--){
    console.log(i)
}
console.log('numeros pares del 1 al 10')

for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("\n4. Números impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("\n5. Múltiplos de 3 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log("\n6. Múltiplos de 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log("\n7. Múltiplos de 3 y 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log("\n8. Múltiplos de 3 o 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }}