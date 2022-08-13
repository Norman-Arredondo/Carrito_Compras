/**Variables */
//querySelector porque sólo tengo un carrito 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    /**1. Agrego un curso, se genera la función de agregarCurso */
    listaCursos.addEventListener('click', agregarCurso);
}


/**Funciones */
function agregarCurso(e) {
    //evitar la acción por default la cual es del href = #
    e.preventDefault();

    /**2. Nos aseguramos que el usuario haya agregado en agregar carrito */
    if(e.target.classList.contains('agregar-carrito')) {
        /**3. Accedemos a todo el div que tiene el contenido del curso */
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
/**4. Leemos los datos  y creamos un objeto con a información que requerimos*/
function leerDatosCurso(curso) {
    //console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agrega elementos al arreglo de carrito
    /**5. Lo agregamos a nuestro carrito de compras */
    articulosCarrito = [...articulosCarrito, infoCurso] 
    console.log(articulosCarrito);

    /**6. Imprimimos ese HTML */
    carritoHTML();
}


//Muestra el carrtio de compras en el HTML
function carritoHTML() {

    //Limpiar el HTML
    LimpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML =   `
            <td>
                ${curso.titulo}
            </td>
       `; 

       //Agrega el HTML del carrito en el tbody
       //appendChild lo agrega al final
       contenedorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function LimpiarHTML() {

    /* Forma Lenta para limpiar HTML
    contenedorCarrito.innerHTML = '';
    */

    //Se ejecuta mientras la condición sea evaluada como verdadera
    //Va vaciando uno por uno
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}