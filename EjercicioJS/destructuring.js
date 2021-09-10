const datos={
    imagen: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg',
    correo: 'vluzuriaga@gmail.com'
}
//console.log(datos)
const mostrarDatos = (avatar) =>
     `
      <img src=${avatar.imagen} alt ${avatar.correo}/>
     `
// let x = mostrarDatos(datos)
const mostrarDatos1 = (avatar) => {
    const {imagen,correo}=avatar
    return(
     `
      <img src=${avatar.imagen} alt ${avatar.correo}/>
     `
    )
}
const mostrarDatos2 = ({imagen:img,correo}) =>
     `
      <img src=${img} alt ${correo}/>
     `
const $root = document.getElementById("root")
$root.innerHTML = "<h2>Destructuring</h2>"
$root.innerHTML += mostrarDatos1(datos)