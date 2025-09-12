// productos.js

// ===== Carrito =====
function añadirAlCarrito(idProducto, nombre, precio) {
<<<<<<< HEAD
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const item = carrito.find(x => x.id_producto === idProducto);
  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ id_producto: idProducto, nombre, precio, cantidad: 1 });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  console.log(`Añadido: ${nombre}. Items en carrito: ${carrito.reduce((a,b)=>a+b.cantidad,0)}`);
  actualizarCarrito();
}

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const total = carrito.reduce((acc, it) => acc + it.precio * it.cantidad, 0);
  console.log(`Total carrito: $${total.toLocaleString('es-CL')} CLP`);
}

// ===== Filtro de categorías =====
function filtrarProductos(valor) {
  const tarjetas = document.querySelectorAll('.tarjeta-producto'); // presentes en tu HTML
  tarjetas.forEach(card => {
    const categoria = card.dataset.categoria || '';
    const mostrar = (valor === 'todos') || (categoria === valor);
    card.style.display = mostrar ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Configurar filtro si existe
  const select = document.getElementById('filtro-categorias-select');
  if (select) {
    select.addEventListener('change', () => filtrarProductos(select.value));
    filtrarProductos(select.value || 'todos');
  }
  // Refrescar totales del carrito al cargar
  actualizarCarrito();
});
=======
    // Obtener el carrito 
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto
    const productoExistente = carrito.find(item => item.id_producto === idProducto);

    if (productoExistente) {
        // aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // agregarlo al carrito
        carrito.push({ id_producto: idProducto, nombre, precio, cantidad: 1 });
    }

    // Guardar el carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar el total en la consola
    console.log(`Producto añadido: ${nombre} - Total carrito: $${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)} CLP`);

    // actualizar el carrito
    actualizarCarrito();
}

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

    // Mostrar el total del carrito
    console.log(`Total del carrito: $${total.toFixed(2)} CLP`);
}


window.onload = actualizarCarrito;
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
