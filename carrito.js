
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    
    
    contenedorCarrito.innerHTML = carrito.map(item => `
        <div class="col-md-12 item-carrito">
            <h5>${item.nombre} - ${item.precio} CLP x ${item.cantidad}</h5>
            <button onclick="eliminarProducto('${item.id_producto}')">Eliminar</button>
        </div>
    `).join('');

    
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
