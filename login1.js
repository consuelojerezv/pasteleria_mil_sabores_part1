// login1.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const correoEl = document.getElementById('loginCorreo');
  const passEl = document.getElementById('loginPassword');

  const errCorreo = document.getElementById('errorLoginCorreo');
  const errPass = document.getElementById('errorLoginPassword');

<<<<<<< HEAD
  const dominiosPermitidos = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
=======
  // Validación correo
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorLoginCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorLoginCorreo").innerText = "";
  }
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13

  const clearErrors = () => {
    errCorreo.textContent = '';
    errPass.textContent = '';
  };

<<<<<<< HEAD
  const correoValido = (value) => {
    if (!value) return false;
    if (value.length > 100) return false;
    const m = value.toLowerCase().match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    if (!m) return false;
    const dominio = m[1];
    return dominiosPermitidos.includes(dominio);
  };

  const passValida = (value) => value && value.length >= 4 && value.length <= 10;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const correo = correoEl.value.trim();
    const pass = passEl.value;

    let ok = true;

    if (!correoValido(correo)) {
      errCorreo.textContent = 'Correo inválido (usa @duoc.cl, @profesor.duoc.cl o @gmail.com, máx. 100 car.).';
      ok = false;
    }
    if (!passValida(pass)) {
      errPass.textContent = 'Contraseña entre 4 y 10 caracteres.';
      ok = false;
    }
    if (!ok) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const u = usuarios.find(x => (x.correo || '').toLowerCase() === correo.toLowerCase());

    if (!u || u.password !== pass) {
      errCorreo.textContent = 'Correo o contraseña incorrectos.';
      return;
    }

    localStorage.setItem('usuarioActual', JSON.stringify({ nombre: u.nombre, correo: u.correo }));
    // Puedes ajustar el destino si quieres ir a productos.html
    window.location.href = 'index1.html';
  });
=======
  
  if (valido) {
    window.location.href = "productos.html"; // ventana de productos
  }
>>>>>>> b820a5ed16835eb1bad2e158fdc0f2048035aa13
});
