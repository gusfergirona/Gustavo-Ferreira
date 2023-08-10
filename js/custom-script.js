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
const carritoCount = document.getElementById('carrito-count');

// Variable para almacenar la cantidad de elementos en el carrito
let cantidadCarrito = 0;

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  carritoCount.innerText = cantidadCarrito.toString();
}

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(producto) {
  cantidadCarrito++;
  actualizarContadorCarrito();
  agregarAlCarrito(producto);
}

// Evento al hacer clic en el botón "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.btn-agregar-carrito');
botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener('click', function () {
    const productoInfo = JSON.parse(this.getAttribute('data-producto-info'));
    agregarProductoAlCarrito(productoInfo);
  });
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

// Modal
document.addEventListener('DOMContentLoaded', function () {
  const modalTitle = document.getElementById('productoModalLabel');
  const modalBody = document.getElementById('productoModalBody');
  const myModal = new bootstrap.Modal(document.getElementById('productoModal'));

  const productos = document.querySelectorAll('.producto-img');
  productos.forEach((producto) => {
    producto.addEventListener('click', (event) => {
      const target = event.currentTarget;
      const productoInfo = JSON.parse(target.getAttribute('data-producto-info'));

      modalTitle.textContent = productoInfo.nombre;
      modalBody.innerHTML = `
        <img src="${productoInfo.imagen}" alt="${productoInfo.nombre}" class="img-fluid">
        <p>${productoInfo.descripcion}</p>
        <p>Precio: $${productoInfo.precio}</p>
        <p>Detalles: ${productoInfo.detalles}</p>
        <button class="btn btn-primary btn-agregar-carrito btn-custom" data-producto-info='${JSON.stringify(productoInfo)}'>Agregar al carrito</button>
      `;

      const btnAgregarCarrito = modalBody.querySelector('.btn-agregar-carrito');
      btnAgregarCarrito.addEventListener('click', function () {
        agregarProductoAlCarrito(productoInfo);
      });

      myModal.show();
    });
  });

  // Event listener para cuando se cierra el modal
  myModal._element.addEventListener('hidden.bs.modal', function () {
    // Aquí puedes agregar acciones que deseas realizar después de cerrar el modal
    console.log('Modal cerrado');
  });

  // Función para agregar al carrito (debes implementarla)
  function agregarAlCarrito(producto) {
    // Implementa esta función para agregar el producto al carrito
    // Puedes usar local storage, una base de datos, o una lógica específica
    console.log('Agregado al carrito:', producto);
  }
});

// Cargar el contador del carrito al cargar la página
actualizarContadorCarrito();



  
  