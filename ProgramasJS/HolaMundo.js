var nombre = "Saul Julio Teran"
var numero = 19
var estado_civil = "Soltero"
console.log("EL estudiante se llama",nombre, "Edad:", numero, "Estado Civil",estado_civil);

//Serie fibonaci


let notas = [4.0,3.4,5.0,3.2,1.1,2.1,4.3,1.9,1.8]
let notaMayor = 0
let notaMenor = 0
let notaMinima = 0
//notaMayor = notaMenor = 0
for (let i = 0; i < notas.length; i++) {
    if (notas[i]>notaMayor) {
        notaMayor=notas[i]
        //console.log("La nota mayor es "+ notaMayor)
    }else if(notas[i]<notaMinima){
        notaMinima= notas[index]
        console.log(notaMinima)
    }     
 }
 notaMayor = notaMenor= notaMayor
for (let index = 0; index < notas.length; index++) {
    //const element = array[index];   
    //notaMenor
  if(notas[index]<notaMenor){
    notaMenor= notas[index]
  }
    
}    
    console.log("La nota mayor es: "+ notaMayor)
    console.log("La nota mas baja es: "+ notaMenor)  
    


console.log("Fin")

