document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");
  const dominiosOK = /(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    // Nombre: requerido, máx 100
    if (!nombre.value.trim() || nombre.value.length > 100) {
      nombre.classList.add("is-invalid"); ok = false;
    } else nombre.classList.remove("is-invalid");

    // Correo: formato, dominios y máx 100
    const mail = correo.value.trim();
    const formatoOK = /^[^\s@]+@[^\s@]+$/.test(mail);
    if (!mail || mail.length > 100 || !formatoOK || !dominiosOK.test(mail)) {
      correo.classList.add("is-invalid"); ok = false;
    } else correo.classList.remove("is-invalid");

    // Mensaje: requerido, máx 500
    if (!mensaje.value.trim() || mensaje.value.length > 500) {
      mensaje.classList.add("is-invalid"); ok = false;
    } else mensaje.classList.remove("is-invalid");

    if (!ok) return;

    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    form.reset();
  });
});
