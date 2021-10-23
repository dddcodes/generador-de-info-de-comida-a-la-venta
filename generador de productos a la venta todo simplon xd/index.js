/*
El codigo siguiente te sugerimos no modificarlo para evitar errores:
*/
let productosEnPantalla = 0;
let clicks = 0;
let nombresGrandes = 0;
let productosDisponiblesEnPantalla = 0;
let productosAgotadosEnPantalla = 0;

let contenido = "";
let n = 0;
let luz = "";
let elProducto = "";

let imagenPorDefecto = 
 "https://th.bing.com/th/id/R3c659a229a057f3813b8856fc3b2e72d?rik=Gbrw24IYN78jsA&riu=http%3a%2f%2fwww.pequeocio.com%2fwp-content%2fuploads%2f2016%2f10%2frecetas-ninos-pokemon-1.jpg&ehk=tVgygaiyk0sl%2bmt8YegI9vLm1k2B9I7nVi%2b2mtTCcsg%3d&risl=&pid=ImgRaw";

let botonGenerador = document.querySelector('.botonGenerador');
let contenedor = document.querySelector('.contenedor');

botonGenerador.addEventListener("click", mostrarProductos);

function configuracion(){
 console.log(`
  ----------------------------------------------------------------------------------
  \n[] Configuracion:
  \n  -Productos que se generan por click: ${productosPorClick}.
  \n  -Limite del nombre de un producto: ${productoNombreLimite}.
  \n  -Mostrar si el producto esta disponible/agotado: ${productoDisponible}.
  \n  -Tipo de generacion de productos: random ( se repiten, si no quieres que se repitan espera a la v2 xd ).
  \n----------------------------------------------------------------------------------
`)
}

configuracion()

function registro(){
  console.log(`
 [] Registro:
     -Productos generados recientemente: ${productosPorClick}
     -Veces que se han generado mas productos: ${clicks}
     -Productos en pantalla: ${productosEnPantalla}
     -Productos con nombres que superan los ${productoNombreLimite} digitos: ${nombresGrandes}
     -Productos disponibles mostrados en pantalla: ${productosDisponiblesEnPantalla}
     -Productos agotados mostrados en pantalla: ${productosAgotadosEnPantalla}
 ----------------------------------------------------------------------------------
 `)
}


function mostrarProductos(){

 clicks++

 for(let i = 0; i < productosPorClick; i++){
  productosEnPantalla++
  n = Math.floor(Math.random()*producto.length)
    
  elProducto = producto[n]

  if(elProducto[0].length >= productoNombreLimite){

  elProducto[0] = elProducto[0].slice(0, productoNombreLimite)
  elProducto[0] = elProducto[0] + "..."

  nombresGrandes++
  }

  if( productoDisponible === true ){

   if(elProducto[3] === true){

    luz = "disponible"
    productosDisponiblesEnPantalla++

   } else {

     luz = "agotado"
     productosAgotadosEnPantalla++

   }
  } else {
   luz = ""
  }

  if( mostrarId != true ){
   elProducto[1] = ""
  }

  contenido = 
  `${contenido}<br />
  <li class="item ${luz}">

   <img src="${imagenPorDefecto}" class="item-img">
   <div class="luzDelProducto ${luz}">${luz}</div>
   ${elProducto[0]}<br />
   <p class="subrayadoEspecial">$${elProducto[2]}</p> <br />
   ${elProducto[1]}

  </li>`

 }
 contenedor.innerHTML = contenido
 registro()
   
}
//generamos los productos que ya estan ahi esperandote en el inicio...que triste
mostrarProductos();