/*
variables para personalizar:
( si no sabes lo que haces no alteres este codigo,
 alterar una sola letra aqui podria romper la maquina bien machine )
*/


/*----------------------------------------------------------------------------------------------------*/


/*
Limite del nombre de un item: 
( la mejor opcion es 35 para el CSS original sin modificaciones ).
*/
let productoNombreLimite = 35; 

/*
Items que se generaran al dar click en el botonGenerador:
( si se supera el numero 30 puede que se congele en dispositivos sin suficiente RAM disponible).

ADVERTENCIA:
Tener este numero mas arriba de lo recomendado podria congelar el navegador
del usuario al generar mas productos.

Si usas los items originales te sugerimos que no superes el numero
30, pero si le agregaste mas codigo a un item o al ciclo en general,
te sugerimos bajar este numero.

En caso de haber simplificado el codigo ( ya sea el CSS de los items, el JS de la funcion, 
 bucle, etc, o el HTML del item) este numero podria ser aun mas alto sin congelar
el dispositivo del usuario.

Te sugerimos hacer pruebas de velocidad al dar click al botonGenerador para evitar 
problemas a tus usuarios.
*/
let productosPorClick = 20; 

/*
Poner si el producto esta disponible/agotado.
( para que tus usuarios sepan si el item esta disponible o no )
*/
let productoDisponible = true; 

/*
Mostrar el numero de identificacion del item:
( esto es util para los desarrolladores cuando estan modificando/analizando la 
generacion de items y otras cosas )
*/
let mostrarId = true ;


/*----------------------------------------------------------------------------------------------------*/

//mostrar id... y ya xd:
let mostrarId_copy = mostrarId;