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