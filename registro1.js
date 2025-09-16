// registro1.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registro');

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

  const correoValido = (value) => {
    if (!value || value.length > 100) return false;
    const m = value.toLowerCase().match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    if (!m) return false;
    return dominiosPermitidos.includes(m[1]);
  };

  const passValida = (value) => value && value.length >= 4 && value.length <= 10;

  const telefonoValido = (value) => !value || /^\d{9}$/.test(value); // opcional, 9 dígitos si viene

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
