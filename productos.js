
function añadirAlCarrito(idProducto, nombre, precio) {
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
