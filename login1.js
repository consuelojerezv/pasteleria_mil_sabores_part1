document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valido = true;

  const correo = document.getElementById("loginCorreo").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Validación correo
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorLoginCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorLoginCorreo").innerText = "";
  }

  // Validación contraseña
  if (password.length < 8) {
    document.getElementById("errorLoginPassword").innerText = "La contraseña es demasiado corta.";
    valido = false;
  } else {
    document.getElementById("errorLoginPassword").innerText = "";
  }

  
  if (valido) {
    window.location.href = "productos.html"; // ventana de productos
  }
});
