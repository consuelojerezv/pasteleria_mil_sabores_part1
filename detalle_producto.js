// Llamar a esta función cuando el usuario haga clic en un botón, por ejemplo:
document.querySelector('#limpiar-carrito-btn')?.addEventListener('click', limpiarCarrito);

// Función para añadir productos al carrito desde la página de detalles
function añadirAlCarritoDesdeDetalle() {
  // Obtener los datos del producto desde el botón "Añadir al carrito"
  const botonAgregar = document.querySelector('.add-to-cart-btn');
  const idProducto = botonAgregar.getAttribute('data-id');
  const nombre = botonAgregar.getAttribute('data-nombre');
  const precio = parseFloat(botonAgregar.getAttribute('data-precio'));

  // Obtener la cantidad seleccionada por el usuario
  const cantidadInput = document.getElementById('cantidad');
  const cantidad = parseInt(cantidadInput.value, 10);

  // Obtener el carrito desde localStorage o crear uno vacío
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Verificar si el producto ya está en el carrito
  const productoExistente = carrito.find(item => item.id_producto === idProducto);

  if (productoExistente) {
    // Si ya está en el carrito, aumentar la cantidad
    productoExistente.cantidad += cantidad;
  } else {
    // Si no está, agregarlo al carrito con la cantidad seleccionada
    carrito.push({ id_producto: idProducto, nombre, precio, cantidad });
  }

  // Guardar el carrito actualizado en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Mostrar un mensaje de confirmación
  alert(`Se han agregado ${cantidad} ${nombre} al carrito.`);
  console.log(`Producto añadido: ${nombre} - Cantidad: ${cantidad}`);
}

// Escuchar el clic en el botón "Añadir al carrito"
document.addEventListener('DOMContentLoaded', () => {
  const botonAgregar = document.querySelector('.add-to-cart-btn');
  if (botonAgregar) {
    botonAgregar.addEventListener('click', añadirAlCarritoDesdeDetalle);
  }
});

// Nota: No es necesario actualizar visualmente el carrito aquí, ya que el usuario
// se redirigirá al carrito para ver los productos.