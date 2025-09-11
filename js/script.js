/* ===== Marcar link activo del navbar (simple) ===== */
document.addEventListener('DOMContentLoaded', () => {
  const here = (location.pathname.split('/').pop() || 'index2.html').toLowerCase();
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if (href === here) a.classList.add('active');
  });

  const form = document.getElementById('frmContacto');
  if (form) configurarValidacionContacto(form);
});


const reacciones = { 1: {likes:0, dislikes:0}, 2:{likes:0, dislikes:0} };

function initDetalleBlog(id){
  const l = document.getElementById('likes'+id);
  const d = document.getElementById('dislikes'+id);
  if (l) l.textContent = reacciones[id].likes;
  if (d) d.textContent = reacciones[id].dislikes;
}

function reaccionBlog(id, tipo){
  if (tipo === 'like')     reacciones[id].likes++;
  if (tipo === 'dislike')  reacciones[id].dislikes++;
  initDetalleBlog(id);
}

const EMAIL_DOMINIOS = /(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

function configurarValidacionContacto(form){
  // Contadores de caracteres
  const msg = form.mensaje;
  const lblMsg = document.getElementById('count-msg');
  if (msg && lblMsg){
    const updateCount = () => lblMsg.textContent = `${msg.value.length}/500`;
    msg.addEventListener('input', updateCount);
    updateCount();
  }

  // Validación en tiempo real
  form.nombre.addEventListener('input', () => validarCampoNombre(form));
  form.email.addEventListener('input', () => validarCampoEmail(form));
  form.mensaje.addEventListener('input', () => validarCampoMensaje(form));
}

function mostrarError(id, texto){
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = texto;
  if (texto) el.classList.add('show'); else el.classList.remove('show');
}

function validarCampoNombre(form){
  const v = form.nombre.value.trim();
  if (!v) { mostrarError('err-nombre','Ingrese su nombre.'); return false; }
  if (v.length > 100) { mostrarError('err-nombre','Máx. 100 caracteres.'); return false; }
  mostrarError('err-nombre',''); return true;
}

function validarCampoEmail(form){
  const v = form.email.value.trim();
  if (!v){ mostrarError('err-email',''); return true; } 
  if (v.length > 100){ mostrarError('err-email','Máx. 100 caracteres.'); return false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){ mostrarError('err-email','Formato de correo inválido.'); return false; }
  if (!EMAIL_DOMINIOS.test(v.split('@')[1])){ mostrarError('err-email','Solo @duoc.cl, @profesor.duoc.cl o @gmail.com'); return false; }
  mostrarError('err-email',''); return true;
}

function validarCampoMensaje(form){
  const v = form.mensaje.value.trim();
  if (!v){ mostrarError('err-msg','Escribe tu mensaje.'); return false; }
  if (v.length > 500){ mostrarError('err-msg','Máx. 500 caracteres.'); return false; }
  mostrarError('err-msg',''); return true;
}

/* Submit del formulario */
function validarContacto(form){
  const okNombre = validarCampoNombre(form);
  const okEmail  = validarCampoEmail(form);
  const okMsg    = validarCampoMensaje(form);

  if (okNombre && okEmail && okMsg){
    alert('Mensaje enviado ✅');
    form.reset();
    const lblMsg = document.getElementById('count-msg');
    if (lblMsg) lblMsg.textContent = '0/500';
  }
  return false; 
}
