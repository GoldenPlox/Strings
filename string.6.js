const url = "facebook.com/Edwin Arroyo";

const nombreUsuario = url.match(/facebook\.com\/(.+)/)[1];

console.log(nombreUsuario);

