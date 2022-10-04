//Tipo de datos JS Variables dinamicas
/* Bloque de comentario */
//Tipo string
var cadena = "Saul"
console.log(cadena)
console.log(typeof cadena)
// variables dinamica - Pueden cambiar su tipo de dato
cadena = 10
console.log(cadena)
console.log(typeof cadena)
 //Tipo numerico
var numero = 1000
console.log(numero)

//Tipo de dato objeto
var objeto = {
    nombre: "Saul",
    apellido: "Julio",
    edad: 19
}
 console.log(objeto)

 //Tipo de dato boolean -True or false
 var bandera = true
 console.log(bandera)
 console.log(typeof bandera)
 bandera = false
 console.log(bandera)
 console.log(typeof bandera)

 //Tipo de dato funcion
 function miFunction(){  
 }
 console.log(miFunction)
 console.log(typeof miFunction)
 //Symbol
 var simbolo = Symbol("mi simbolo")
 console.log(simbolo)
 console.log(typeof simbolo)

 //Tipo clase es una funcion
 class Persona{
    constructor(nombre,apellido){
     this.nombre = nombre;
     this.apellido = apellido;
    }
 }
 console.log(Persona)
 console.log(typeof Persona)
 
 //Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x)
// Tipo null = ausencia de valor
var s = null;
console.log(s)
console.log(typeof s)

//Arreglos Object
var autos = ["Bmw","Ferrari","Lamborgini","Audi","Volvo"];
console.log(autos)
console.log(typeof autos)

//Cadenas vacias
var z = "";
console.log(z);
console.log(typeof z)

//Concatenar Cadenas
var nombre = "Saul"
var apellido = "Julio"
var nombreCompleto = nombre +' '+ apellido; //Concatenacion
console.log(nombreCompleto)
var nombreCompleto2 = 'Saul'+ ' ' + 'Julio'; //Otra forma de concatenacion
console.log(nombreCompleto2)

var x = nombre +123 +6; // Se realiza la operacion como si fuera cadena
console.log(x)
x = nombre + (2+4); //Para hacer la suma y no concatenar
console.log(x)
x = 6 + 123 + nombre; // Se realiza la operacion como si fueran numeros
console.log(x)