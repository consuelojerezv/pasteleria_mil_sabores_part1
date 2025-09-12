
document.querySelector('#limpiar-carrito-btn')?.addEventListener('click', limpiarCarrito);


function añadirAlCarritoDesdeDetalle() {
  
  const botonAgregar = document.querySelector('.add-to-cart-btn');
  const idProducto = botonAgregar.getAttribute('data-id');
  const nombre = botonAgregar.getAttribute('data-nombre');
  const precio = parseFloat(botonAgregar.getAttribute('data-precio'));

  
  const cantidadInput = document.getElementById('cantidad');
  const cantidad = parseInt(cantidadInput.value, 10);

  
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  
  const productoExistente = carrito.find(item => item.id_producto === idProducto);

  if (productoExistente) {
    
    productoExistente.cantidad += cantidad;
  } else {
    
    carrito.push({ id_producto: idProducto, nombre, precio, cantidad });
  }

  
  localStorage.setItem('carrito', JSON.stringify(carrito));

  
  alert(`Se han agregado ${cantidad} ${nombre} al carrito.`);
  console.log(`Producto añadido: ${nombre} - Cantidad: ${cantidad}`);
}


document.addEventListener('DOMContentLoaded', () => {
  const botonAgregar = document.querySelector('.add-to-cart-btn');
  if (botonAgregar) {
    botonAgregar.addEventListener('click', añadirAlCarritoDesdeDetalle);
  }
});

function limpiarCarrito() {
    localStorage.removeItem('carrito');
    console.log('Carrito limpiado.');
    actualizarCarrito();
}