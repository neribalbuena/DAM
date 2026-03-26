const formulario = document.getElementById("loginForm");
const usuarioInput = document.getElementById("usuario");
const passwordInput = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const usuario = usuarioInput.value;
    const password = passwordInput.value;

    if (usuario === "neri" && password === "1234"){
        mensaje.textContent = "Inicio exitoso";
        mensaje.style.color = "green";
        window.location.href = "bn.html";
    } else {
        mensaje.textContent = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }

    usuarioInput.value = "";
    passwordInput.value = "";
});