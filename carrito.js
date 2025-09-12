<<<<<<< HEAD
const fmtCLP = (n) => "$" + new Intl.NumberFormat("es-CL").format(Math.round(n));
const getCart = () => JSON.parse(localStorage.getItem("carrito")) || [];
const setCart = (c) => localStorage.setItem("carrito", JSON.stringify(c));

function actualizarBadge(){
  const badge = document.getElementById("badge-carrito");
  if (!badge) return;
  const unidades = getCart().reduce((s, it) => s + it.cantidad, 0);
  badge.textContent = unidades;
}

function mostrarCarrito() {
  const carrito = getCart();
  const cont = document.getElementById("productos-carrito");
  const totalEl = document.getElementById("total-carrito");
  const btnPagar = document.getElementById("boton-pago");

  cont.innerHTML = carrito.length
    ? carrito.map(item => `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text mb-1">Precio: ${fmtCLP(item.precio)}</p>
            <p class="card-text">Cantidad: ${item.cantidad}</p>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto('${item.id_producto}')">Eliminar</button>
          </div>
=======

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    
    
    contenedorCarrito.innerHTML = carrito.map(item => `
        <div class="col-md-12 item-carrito">
            <h5>${item.nombre} - ${item.precio} CLP x ${item.cantidad}</h5>
            <button onclick="eliminarProducto('${item.id_producto}')">Eliminar</button>
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
        </div>
      </div>
    `).join("")
    : `<div class="col-12"><div class="alert alert-secondary">Tu carrito está vacío.</div></div>`;

<<<<<<< HEAD
  const total = carrito.reduce((t, it) => t + it.precio * it.cantidad, 0);
  totalEl.textContent = fmtCLP(total);
  btnPagar.disabled = carrito.length === 0;
  actualizarBadge();
}

function eliminarProducto(id) {
  const carrito = getCart().filter(it => it.id_producto !== id);
  setCart(carrito);
  mostrarCarrito();
}

function limpiarCarrito() {
  localStorage.removeItem("carrito");
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("limpiar-carrito-btn")?.addEventListener("click", limpiarCarrito);
  document.getElementById("boton-pago")?.addEventListener("click", () => alert("Simulación de pago ✅"));
  mostrarCarrito();
});
=======
    
    totalCarrito.textContent = `$${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)} CLP`;
}


function eliminarProducto(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carrito.filter(item => item.id_producto !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    mostrarCarrito();
}


function limpiarCarrito() {
    localStorage.removeItem('carrito');  
    mostrarCarrito();  
}


document.querySelector('#limpiar-carrito-btn')?.addEventListener('click', limpiarCarrito);


window.onload = mostrarCarrito;
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
