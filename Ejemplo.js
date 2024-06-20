//Ejecicio 1

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
    { titulo: "1984", autor: "George Orwell", año: 1949 }
  ];
  
  // Generar lista de autores
  const autores = libros.map(libro => libro.autor);
  
  console.log(autores);

  //Ejecicio 2

  const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

// Verificar si la antigüedad es mayor a 5 años
if (empleado.antiguedad > 5) {
  // Calcular el aumento del 10%
  const aumento = empleado.salario * 0.1;
  const nuevoSalario = empleado.salario + aumento;

  // Actualizar el salario en el objeto empleado
  empleado.salario = nuevoSalario;

  // Imprimir los nuevos valores
  console.log(`Nuevo salario de ${empleado.nombre}: ${nuevoSalario}`);
  console.log(`Antigüedad: ${empleado.antiguedad} años`);
} else {
  // En caso de que la antigüedad no cumpla la condición
  console.log(`El salario de ${empleado.nombre} no se modificó.`);
}

  //Ejecicio 3

  const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

// Inicializar una variable para guardar el número mayor
let mayor = numeros[0]; // Se asume que el primer elemento es el mayor inicialmente

// Iterar sobre el array para encontrar el número mayor
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

// Imprimir el número mayor encontrado
console.log(`El número mayor en la lista es: ${mayor}`);

//Ejercicio 4


// Variables para calcular el promedio de los números impares
let sumaImpares = 0;
let contadorImpares = 0;

// Iterar sobre el array para sumar los números impares y contar cuántos hay
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) { // Verificar si el número es impar
    sumaImpares += numeros[i]; // Sumar el número impar a la suma total
    contadorImpares++; // Incrementar el contador de números impares
  }
}

// Calcular el promedio de los números impares
let promedioImpares = sumaImpares / contadorImpares;

// Imprimir el resultado del promedio de los números impares
console.log(`El promedio de los números impares es: ${promedioImpares}`);

//Ejercicio 5

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

// Desestructurar el objeto persona en variables individuales
const { nombre, edad, ciudad } = persona;

// Mostrar las variables en consola
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);

