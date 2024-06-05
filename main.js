import './css/style.css'

// 1. Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor.

const nombre = 'Romina'
console.log(nombre)

// 2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante).

const edad = 19
const precio = 58.95
const ciudad = 'Lima'
const esEstudiante = true

console.log(edad, precio, ciudad, esEstudiante)

// 3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".
const nombre2 = 'Romina'
const apellido = 'Romani'
console.log('Hola, ' + nombre2 + ' ' + apellido)

// 4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.
const num1 = 2
const num2 = 5

console.log('Operaciones con ' + num1 + ' y ' + num2)

console.log('El resultado de la suma es: ' + (num1 + num2))
console.log('El resultado de la resta es: ' + (num1 - num2))
console.log('El resultado de la multiplicación es: ' + (num1 * num2))
console.log('El resultado de la division es:' + (num2 / num1))

// 5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

let contador = 3
console.log('El valor del contador es: ' + contador)
contador++
console.log('Incrementando el contador: ' + contador)
contador--
console.log('Decrementando el contador: ' + contador)

// 6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().
const nombreUsuario = prompt('Ingresa tu nombre')
alert('Bienvenido ' + nombreUsuario)

// 7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).
const radio = parseFloat(prompt('Ingresa el radio del círculo'))
const area = Math.PI * Math.pow(radio, 2)
alert('El área del círculo es: ' + area)

// 8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.
const celsius = parseFloat(prompt('Ingresa la temperatura en grados Celsius'))
const fahrenheit = (celsius * 9/5) + 32
alert('La temperatura en grados Fahrenheit es: ' + fahrenheit)

// 9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio.
const num3 = parseFloat(prompt('Ingresa el primer número'))
const num4 = parseFloat(prompt('Ingresa el segundo número'))
const num5 = parseFloat(prompt('Ingresa el tercer número'))
const promedio = (num3 + num4 + num5) / 3
alert('El promedio de los números es: ' + promedio)

// 10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.
const numero = parseFloat(prompt('Ingresa un número'))
const esPositivo = numero >= 0 ? 'positivo' : 'negativo'
alert('El número ingresado es ' + esPositivo)

// 11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.
const edadUsuario = parseInt(prompt('Ingresa tu edad'))
if (edadUsuario >= 18) {
  alert('Eres mayor de edad')
}else {
  alert('Eres menor de edad')
}

// 12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.
const dia = parseInt(prompt('Ingresa un número del 1 al 7'))
let nombreDia = ''
switch (dia) {
  case 1:
    nombreDia = 'Lunes'
    break
  case 2:
    nombreDia = 'Martes'
    break
  case 3:
    nombreDia = 'Miércoles'
    break
  case 4:
    nombreDia = 'Jueves'
    break
  case 5:
    nombreDia = 'Viernes'
    break
  case 6:
    nombreDia = 'Sábado'
    break
  case 7:
    nombreDia = 'Domingo'
    break
  default:
    nombreDia = 'Número inválido'
}
alert('El día de la semana es: ' + nombreDia)

