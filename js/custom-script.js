document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});

// Obtener el elemento del carrito y el contador
const carritoIcono = document.querySelector('.carrito');
const carritoCount = document.getElementById('carrito-count');

// Variable para almacenar la cantidad de elementos en el carrito
let cantidadCarrito = 0;

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  carritoCount.innerText = cantidadCarrito.toString();
}

// Función para agregar un producto al carrito
function agregarProductoAlCarrito() {
  cantidadCarrito++;
  actualizarContadorCarrito();
}

// Evento al hacer clic en el botón "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener('click', agregarProductoAlCarrito);
});


