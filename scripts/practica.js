// hola soy un comentaria multilinea 

//confirm ("HOLA MUNDO")


//diferencias entre var y let 

//var nombre ="Lara"

//console.log (nombre)

//var apellido = "Cairoli"

//console.log (apellido)

//var vectorEdades= [20,30,45,55,67]

//console.log (vectorEdades)


//CONTADOR VARIABLES

//for (var contador=1; contador <=10; contador ++){
//console.log (contador);
//}

//var contador = 1; 

//while (contador <=10)

//{console.log (contador); contador ++;
//}

//var Valor1= 10;

//var Valor2= 20;

//FUNCIÓN SUMAR

//function sumar (Valor1,Valor2){
    //return Valor1+Valor2 

//} 

//var total = sumar (100,20);

//console.log (total);


var vector = [20,25,60,98,11,78,4,33,85,10];

console.log (vector)

var mayor, posiciónMayor;

var menor, posiciónMenor; 

mayor = vector [0]
posiciónMayor = 0;

menor = vector [0]
posiciónMenor = 0;

for (let i=0; i<10; i++) {
    if (mayor<vector [i])
     {mayor=vector [i];
        posiciónMayor= i;

        }

    if (menor>vector [i])
     {menor=vector [i];
     posiciónMenor= i;

     
     }


}

console.log ( "El mayor es" + mayor , + posiciónMayor)

//alert ("Hello," + nombre + "! Welcome to my website, "); 

//confirm ("¿Desea volver al incio de la pagina?")

//prompt ("introduzca la contraseña porfavor: ", "1234");

var numeroA = 1; 
let numeroB = 2; 
const NUMEROC = 3; 

//SUMA DE 2 NÚMEROS

console.log (numeroA);

console.log (numeroB);

console.log (NUMEROC);

let resultadoSuma = numeroA + numeroB; 

console.log (resultadoSuma)

let resultadoResta = NUMEROC - numeroB;

console.log (resultadoResta)

let resultadoProducto = NUMEROC * numeroB;

console.log (resultadoProducto)

let variable1; 

console.log(variable1)

var TextoA = "Full";

let TextoB = "Stack"

const BLANCO = " ";

let resultadoA = TextoA + TextoB;

console.log (resultadoA)

//variable de texto (string) + var de number (1,2,3,ect)
let resultadoB = TextoA + numeroA

console.log (resultadoB)

let resultadoC = TextoA + BLANCO + TextoB;

console.log (resultadoC)


//let NombreIngresado = prompt ("Ingrese su Nombre de Usuario")

//console.log (NombreIngresado)

//console.log ("mensaje de prueba")

//strings (texto)
console.log (typeof "hola");

//numbers
console.log (typeof 3);

//let ingresatunombre = Prompt ("Ingresa tu nombre")

//let nombre = prompt ("Ingresa tu nombre");

//console.log (nombre);

//Confirm ("¿estas seguro que quieren continuar?")
// confirm ("¿estas seguro");
//console.log (confirm ("¿estas seguro"));


 let age = 18

 if (age >= 18) {
 console.log ("podes manejar");
 }
 else  { 
    console.log (age >= 18);
    console.log ("no podes manejar");
 }

let suma = (2, 3);

  console.log (suma)



//let clima = prompt ("How is the weather?")
//if (clima == "lluvioso")
// console.log ("Lleva paraguas")

//else {
//  console.log ("Qué bueno que no esta lloviendo!!")
//if (clima == "soleado"){
 //console.log ("Ponete protección solar")
//}
//}

let edad = 20;

let esMayorEdad = edad >18 ?true :false; 

console.log (esMayorEdad)

let myarray = ["Lara", "Cairoli"]

console.log (myarray)

let mascotas = [ "gato", "perro", "conejo"];

console.log (mascotas) //array de strings 

let numeros = ["2", "3", "4"]; //array numerales

let verdades = ["true", "false", "true"]; //array de booleans 


let nombres = [ "Lara", "Mateo", "Vicky", "Lucia", "Franco", "Agustin"]

console.log (nombres)

console.log (nombres [0])

console.log (nombres.length)



//let fruta = "manzana"
//switch (fruta) {
//  case "manzana":
//  color = "Rojo";
//  break;

//  case "kiwi":
// color = "Verde";
//  break;

//  default: 
//  color = "Blanco";

//}

//console.log (fruta)


let a = 2

a == "2" //true
a == 2   //true
a === "2" //false
a === 2  //true

// == (iguales) ===(iguales y del mismo tipo)

a != "2" //false (no son estrictamente desiguales)
a != 2   //false (son iguales)
a !== "2" //true (es estrictamente desigual)
a !== 2  //false (son iguales)

// != (desigual) !== (estrictamente desigual)

a > "4" //false 
a > 1   // true
a > 2   //false  (es =)

//no importa el tipo, el izq es mayor que el der

a <"4" //true
a < 1   // false 
a < 2   //true (es =)

//idem, el izq es menor que el der

a <="4" //true
a <=2  //true

//menor o igual



a >="4" //false
a >= 2  //true


//mayor o igual 



//and &&


//let mascota = "Perro";
//let Edad = 1;
//if (mascota == "Perro" && edad < 2) {
//console.log("Tu perro es cachorro");
//}

//or ||



//let mascota = "Caballo";


//console.log (mascota)

//if (mascota == "Perro" || mascota == "Gato") {

//document.write ("Tu mascota será bienvenida al alojamiento");

//} else {
//document.write("Lo sentimos, solo recibimos perros o gatos");
//}


//let tieneMascota = true;
//if (!tieneMascota ) {
//console.log("No tenés mascotas.");}

//let entrada = prompt ("ingresa una letra");

//let salida = entrada + "" + "ingresada"; 

//alert (salida); 




let textoA = prompt ("Ingrese su nombre");

let textoB = prompt ("Ingrese su apellido");

let resultado = textoA + textoB; 

alert (resultado) ;





