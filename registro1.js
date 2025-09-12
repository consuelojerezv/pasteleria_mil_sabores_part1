// ======================
// VALIDACIÓN FORMULARIO
// ======================
document.getElementById("registro").addEventListener("submit", function(e) {
  e.preventDefault();

  let valido = true;

  // Validación nombre
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById("errorNombre").innerText = "Ingrese un nombre válido (solo letras y espacios).";
    valido = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  // Validación correo (@duoc.cl, @gmail.cl, @gmail.com)
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // Validación contraseña
  const password = document.getElementById("password").value;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
  if (!regexPass.test(password)) {
    document.getElementById("errorPassword").innerText =
      "La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un símbolo (@#$%).";
    valido = false;
  } else {
    document.getElementById("errorPassword").innerText = "";
  }

  // Confirmación de contraseña
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("errorConfirmPassword").innerText = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("errorConfirmPassword").innerText = "";
  }

  // Teléfono opcional
  const telefono = document.getElementById("telefono").value;
  if (telefono !== "" && !/^\d{9}$/.test(telefono)) {
    document.getElementById("errorTelefono").innerText = "Ingrese un teléfono válido de 9 dígitos.";
    valido = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }

  // Dirección (solo obligatoria)
  const direccion = document.getElementById("direccion").value.trim();
  if (direccion === "") {
    document.getElementById("errorDireccion").innerText = "La dirección es obligatoria.";
    valido = false;
  } else {
    document.getElementById("errorDireccion").innerText = "";
  }

  // Validar selección de región
  const region = document.getElementById("region").value;
  if (region === "") {
    alert("Debe seleccionar una región.");
    valido = false;
  }

  // Validar selección de comuna
  const comuna = document.getElementById("comuna").value;
  if (comuna === "") {
    alert("Debe seleccionar una comuna.");
    valido = false;
  }

  // Enviar si todo es válido
  if (valido) {
    alert("Registro exitoso ✅");
    this.reset();
  }
});

// ======================
// REGIONES Y COMUNAS
// ======================
const comunasPorRegion = {
  Metropolitana: ["Santiago", "Puente Alto", "Ñuñoa"],
  Biobio: ["Concepción", "Talcahuano", "Chiguayante"],
  Araucania: ["Temuco", "Villarrica", "Padre Las Casas"],
  Ñuble: ["Chillán", "San Carlos", "Bulnes"]
};

const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");

if (regionSelect && comunaSelect) {
  regionSelect.addEventListener("change", function () {
    const regionSeleccionada = this.value;

    // Resetear las opciones del select de comuna
    comunaSelect.innerHTML = '<option value="" disabled selected>Seleccione</option>';

    // Si la región tiene comunas, agregarlas
    if (comunasPorRegion[regionSeleccionada]) {
      comunasPorRegion[regionSeleccionada].forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
    }
  });
}
