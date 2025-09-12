// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");
  const dominiosOK = /(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe sin validar

    // Validaciones
    if (nombre.value.trim() === "") {
      alert("Por favor ingresa tu nombre completo.");
      nombre.focus();
      return;
    }

    if (correo.value.trim() === "" || !validarCorreo(correo.value)) {
      alert("Por favor ingresa un correo válido.");
      correo.focus();
      return;
    }

    if (mensaje.value.trim() === "") {
      alert("Por favor escribe tu mensaje.");
      mensaje.focus();
      return;
    }

    // Si todo está bien
    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    form.reset();
  });

  // Función para validar correo
  function validarCorreo(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
