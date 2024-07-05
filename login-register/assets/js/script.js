document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", login);

window.addEventListener("resize", anchoPag);

//Declaracion de variables

var contenedor_login_register = document.querySelector(".contenedor__login-register");

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");


var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPag() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }   
    else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPag();


function register() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }   
    else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "none";
        caja_trasera_login.style.opacity = "block";
        caja_trasera_login.style.opacity = "1";
    }

}

function login() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }   
    else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "block";
        caja_trasera_login.style.opacity = "none";
    }
    
}

// Genera un número aleatorio único para usar como parámetro de caché
var version = Math.floor(Math.random() * 1000000);

// Obtén todas las etiquetas link que tienen un atributo rel="stylesheet"
var styleSheets = document.querySelectorAll('link[rel="stylesheet"]');

// Itera sobre las etiquetas link y agrega el parámetro de caché
styleSheets.forEach(function (styleSheet) {
    var href = styleSheet.getAttribute('href');
    
    // Agrega el parámetro de versión solo si ya hay parámetros en la URL
    styleSheet.setAttribute('href', href.indexOf('?') === -1 ? href + '?v=' + version : href + '&v=' + version);
});

