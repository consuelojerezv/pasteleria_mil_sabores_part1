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
        </div>
      </div>
    `).join("")
    : `<div class="col-12"><div class="alert alert-secondary">Tu carrito está vacío.</div></div>`;

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
