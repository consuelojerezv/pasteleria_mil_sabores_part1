
function añadirAlCarrito(idProducto, nombre, precio) {
    // Obtener el carrito desde localStorage o crear uno vacío
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id_producto === idProducto);

    if (productoExistente) {
        // Si ya está en el carrito, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no está, agregarlo al carrito
        carrito.push({ id_producto: idProducto, nombre, precio, cantidad: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar el total en la consola (opcional, puedes actualizar la vista en la página)
    console.log(`Producto añadido: ${nombre} - Total carrito: $${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)} CLP`);

    // Llamada para actualizar el carrito visualmente en la página
    actualizarCarrito();
}

function actualizarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);

    // Mostrar el total del carrito en la consola o actualizar alguna parte visualmente de la página
    console.log(`Total del carrito: $${total.toFixed(2)} CLP`);
}

// Cargar el carrito al cargar la página
window.onload = actualizarCarrito;
