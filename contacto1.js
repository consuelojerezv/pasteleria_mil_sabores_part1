
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    
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

    
    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    form.reset();
  });

  
  function validarCorreo(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
