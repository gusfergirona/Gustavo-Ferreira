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


// Función para redireccionar a la página correspondiente al hacer clic en un enlace del menú
function handleNavLinkClick(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  
  var targetPage = event.target.getAttribute("href"); // Obtener la página objetivo del atributo "href"
  window.location.href = targetPage; // Redirigir a la página objetivo
}

// Obtener todos los enlaces del menú y agregarles un controlador de eventos clic
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(function(link) {
  link.addEventListener("click", handleNavLinkClick);
});

function mostrarProductos() {
    const categoriaSelect = document.getElementById("categoria-select");
    const categoriaSeleccionada = categoriaSelect.value;

    const productos = document.querySelectorAll(".categoria-producto");
    productos.forEach((producto) => {
      const categoriaProducto = producto.dataset.categoria;
      if (categoriaProducto === categoriaSeleccionada || categoriaSeleccionada === "") {
        producto.style.display = "block";
      } else {
        producto.style.display = "none";
      }
    });
  }