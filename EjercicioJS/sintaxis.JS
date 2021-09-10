//variables primitivas
let nombre = null
let apellido = "Luzuriaga"
let edad = 20
let estado= true
//constantes
//arreglos
const numeros = [2, 45, 60, 85, 10]
//objetos
const articulo = {
    descripcion: 'Pepsi',
    precio: 1,
    stock: 500
}
const notas = [
    {nombre: "Elkin", promedio: 100,
    parciales:[
        {primer:[25,35]},
        {segundo:[15,25]}]
    },

    {nombre: "Nahima", promedio:70,
    parciales:[
        {primer:[35,25]},
        {segundo:[15,5]}]
    },

    {nombre: "Andrew", promedio:100,
    parciales:[
        {primer:[25,25]},
        {segundo:[25,25]}]
    }

]
articulo.precio= 30
articulo.estado= true
//console.log("Articulo", articulo,articulo.descripcion, articulo.estado, articulo.precio)
//console.log(notas)
// console.log(notas[1])
// console.log(notas[1].nombre)
// console.log(notas[1].parciales)
// console.log(notas[1].parciales[1])
// console.log(notas[1].parciales[1].segundo)
// console.log(notas[1].parciales[1].segundo[1])
//if (condiciones)
/* if (nombre)
    console.log("nombre: ",nombre,"edad: ",edad)
else
    console.log("No ha ingresado nombre",nombre)
 */

// let resp = (nombre == undefined) ? "No se ha creado la variable" : nombre
// console.log(resp)

//switch
// dia = 0
// switch (dia){
//     case 1:
//         console.log("Lunes")
//         break
//     case 2:
//         console.log("Martes")
//         break
//     default:
//         console.log("Día no válido")
//         break
// }

//try
// let x=20
// let y=0
// try{
//     if (y==0)
//      throw ("Division no permitida para cero")
//    let resp =x/y
//    console.log(resp)
// }catch(error){
//     console.log("error con y=0,",error)
// }

//ciclos
const numeross = [2, 45, 60, 85, 10, 20, 7]
// let pos=0
// while (pos < numeross.length && numeross[pos]!=85){
//   console.log(pos,"[",numeross[pos],"]")
//   pos += 1
// }
// console.log("Termino el While")

//for
// for(let ind=0;ind<numeross.length;ind+=2){
//     console.log(ind,"[",numeross[ind],"]")
// }
// for(let ind=numeross.length-1;ind>=0;ind-=1){
//     console.log(ind,"[",numeross[ind],"]")
// }

//funciones
function suma(){
    let n1= 5
    let n2= 20
    console.log(n1,"+",n2,"=",n1+n2)
}
//suma()

function multiplicar(n1,n2){
    return n1*n2
}
//console.log(multiplicar(4,5))
///
function multiplicar(n1=1,n2=2){
    n1= (n1) ? n1 : 0
    n2= (n2) ? n2 : 0
    return n1*n2
}
//console.log(multiplicar(4,5))

//funcion flecha
const sumaA = () =>{
    let n1= 5
    let n2= 20
    console.log(n1,"+",n2,"=",n1+n2)
}
//sumaA()
//multiplicacion
const multiplicarA =(n1=1,n2=2) => {
    n1= (n1) ? n1 : 0
    n2= (n2) ? n2 : 0
    return n1*n2
}
//console.log(multiplicarA(4,5))
//resta
function resta(n1,n2){
    return n1-n2
}
//console.log(resta(4,2)) 
const restaA = (n1,n2) => n1-n2
//console.log(resta(5,2)) 
//division
function division(n1,n2){
    resp = n2 ? n1/n2 : 0
    return resp
}
//console.log(division(6,2))
//
const divisionA = (n1,n2) => n2 ? n1/n2 : 0
//console.log(divisionA(6,4))

//template 
const sumaB = () =>{
    let n1= 5
    let n2= 20
    console.log(`Suma: ${n1}+${n2}=${n1+n2}`)
}
//sumaB()

//arrays
const arreglos = [2, 45, 60, 85, 10]
//for
for(let ind=0;ind<arreglos.length;ind++){
    //console.log(`${ind}[${arreglos[ind]}]`)
}