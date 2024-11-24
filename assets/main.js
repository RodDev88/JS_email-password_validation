function verificar() {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email == "juan@tuna.cl" && password == "indomito") {
    mensaje = document.querySelector("#mensaje");
    mensaje.innerHTML = "Password correcto";
  } else {
    mensaje = document.querySelector("#mensaje");
    mensaje.innerHTML = "Password incorrecto";
  }
}
