<<<<<<< HEAD
// Helpers
const fmtCLP = (n) => new Intl.NumberFormat("es-CL").format(n);
const getCart = () => JSON.parse(localStorage.getItem("carrito")) || [];
const setCart = (c) => localStorage.setItem("carrito", JSON.stringify(c));
const actualizarBadge = () => {
  const badge = document.getElementById("badge-carrito");
  if (!badge) return;
  const unidades = getCart().reduce((n, it) => n + it.cantidad, 0);
  badge.textContent = unidades;
};

function añadirAlCarritoDesdeDetalle() {
  const botonAgregar = document.querySelector(".add-to-cart-btn");
  if (!botonAgregar) return;

  const id = botonAgregar.dataset.id;
  const nombre = botonAgregar.dataset.nombre;
  const precio = Number(botonAgregar.dataset.precio || 0);
  const cantidad = Math.max(1, parseInt(document.getElementById("cantidad")?.value || "1", 10));

  const carrito = getCart();
  const existente = carrito.find((i) => i.id_producto === id);
  if (existente) existente.cantidad += cantidad;
  else carrito.push({ id_producto: id, nombre, precio, cantidad });

  setCart(carrito);
  actualizarBadge();
  alert(`Se agregaron ${cantidad} “${nombre}”. Total carrito: $${fmtCLP(
    carrito.reduce((t, it) => t + it.precio * it.cantidad, 0)
  )}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".add-to-cart-btn");
  if (boton) boton.addEventListener("click", añadirAlCarritoDesdeDetalle);
  actualizarBadge();
});
=======

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
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
