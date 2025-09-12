<<<<<<< HEAD
// registro1.js
=======

// VALIDACIÓN 

document.getElementById("registro").addEventListener("submit", function(e) {
  e.preventDefault();
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro');

<<<<<<< HEAD
  // Inputs
  const nombreEl = document.getElementById('nombre');
  const correoEl = document.getElementById('correo');
  const passEl = document.getElementById('password');
  const pass2El = document.getElementById('confirmPassword');
  const telEl = document.getElementById('telefono');
  const dirEl = document.getElementById('direccion');

  const regionEl = document.getElementById('region');
  const comunaEl = document.getElementById('comuna');

  // Spans de error
  const eNombre = document.getElementById('errorNombre');
  const eCorreo = document.getElementById('errorCorreo');
  const ePass = document.getElementById('errorPassword');
  const ePass2 = document.getElementById('errorConfirmPassword');
  const eTel = document.getElementById('errorTelefono');
  const eDir = document.getElementById('errorDireccion');

  const dominiosPermitidos = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];

  const regionesYComunas = {
    'Metropolitana': ['Santiago', 'Providencia', 'Las Condes', 'Maipú', 'Puente Alto', 'Ñuñoa'],
    'Biobio': ['Concepción', 'Talcahuano', 'Chiguayante', 'San Pedro de la Paz', 'Los Ángeles'],
    'Araucania': ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón'],
    'Ñuble': ['Chillán', 'San Carlos', 'Bulnes']
  };

  function cargarComunas(region) {
    comunaEl.innerHTML = '<option value="" disabled selected>Seleccione</option>';
    (regionesYComunas[region] || []).forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      comunaEl.appendChild(opt);
    });
  }

  regionEl.addEventListener('change', (e) => cargarComunas(e.target.value));

  // Helpers validación
  const clearErrors = () => {
    [eNombre, eCorreo, ePass, ePass2, eTel, eDir].forEach(el => el && (el.textContent = ''));
  };
=======
  //  nombre
  const nombre = document.getElementById("nombre").value.trim();
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById("errorNombre").innerText = "Ingrese un nombre válido (solo letras y espacios).";
    valido = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  // correo
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // contraseña
  const password = document.getElementById("password").value;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
  if (!regexPass.test(password)) {
    document.getElementById("errorPassword").innerText =
      "La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un símbolo (@#$%).";
    valido = false;
  } else {
    document.getElementById("errorPassword").innerText = "";
  }
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13

  const correoValido = (value) => {
    if (!value || value.length > 100) return false;
    const m = value.toLowerCase().match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    if (!m) return false;
    return dominiosPermitidos.includes(m[1]);
  };

<<<<<<< HEAD
  const passValida = (value) => value && value.length >= 4 && value.length <= 10;
=======
  // Teléfono 
  const telefono = document.getElementById("telefono").value;
  if (telefono !== "" && !/^\d{9}$/.test(telefono)) {
    document.getElementById("errorTelefono").innerText = "Ingrese un teléfono válido de 9 dígitos.";
    valido = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13

  const telefonoValido = (value) => !value || /^\d{9}$/.test(value); // opcional, 9 dígitos si viene

<<<<<<< HEAD
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const nombre = (nombreEl.value || '').trim();
    const correo = (correoEl.value || '').trim();
    const pass = passEl.value || '';
    const pass2 = pass2El.value || '';
    const tel = (telEl.value || '').trim();
    const direccion = (dirEl.value || '').trim();
    const region = regionEl.value || '';
    const comuna = comunaEl.value || '';

    let ok = true;

    if (!nombre || nombre.length > 50) {
      eNombre.textContent = 'Nombre requerido (máx. 50 caracteres).';
      ok = false;
=======
  //región
  const region = document.getElementById("region").value;
  if (region === "") {
    alert("Debe seleccionar una región.");
    valido = false;
  }

  // comuna
  const comuna = document.getElementById("comuna").value;
  if (comuna === "") {
    alert("Debe seleccionar una comuna.");
    valido = false;
  }

  
  if (valido) {
    alert("Registro exitoso ✅");
    this.reset();
  }
});


// REGIONES Y COMUNAS

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

    
    comunaSelect.innerHTML = '<option value="" disabled selected>Seleccione</option>';

    
    if (comunasPorRegion[regionSeleccionada]) {
      comunasPorRegion[regionSeleccionada].forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna;
        option.textContent = comuna;
        comunaSelect.appendChild(option);
      });
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
    }
    if (!correoValido(correo)) {
      eCorreo.textContent = 'Correo inválido (usa @duoc.cl, @profesor.duoc.cl o @gmail.com, máx. 100 car.).';
      ok = false;
    }
    if (!passValida(pass)) {
      ePass.textContent = 'Contraseña entre 4 y 10 caracteres.';
      ok = false;
    }
    if (pass !== pass2) {
      ePass2.textContent = 'Las contraseñas no coinciden.';
      ok = false;
    }
    if (!telefonoValido(tel)) {
      eTel.textContent = 'Teléfono debe tener 9 dígitos (o déjalo vacío).';
      ok = false;
    }
    if (!direccion || direccion.length > 300) {
      eDir.textContent = 'Dirección requerida (máx. 300 caracteres).';
      ok = false;
    }
    if (!region) {
      alert('Selecciona una región.');
      ok = false;
    }
    if (!comuna) {
      alert('Selecciona una comuna.');
      ok = false;
    }

    if (!ok) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const yaExiste = usuarios.some(u => (u.correo || '').toLowerCase() === correo.toLowerCase());
    if (yaExiste) {
      eCorreo.textContent = 'Este correo ya está registrado.';
      return;
    }

    usuarios.push({
      nombre, correo, password: pass, telefono: tel,
      direccion, region, comuna, createdAt: new Date().toISOString()
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login1.html';
  });
});
