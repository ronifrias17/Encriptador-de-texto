let textoEncriptadoPrevio = false;

let reemplazosEncriptar = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

let reemplazosDesencriptar = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function encriptarTexto() {
    let textoOriginal = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('mensaje-encriptado');
    let texto = document.getElementById('textoCopiado');
    let imagen = document.getElementById('Muñeco');

    // Verificar si el textoOriginal está vacío
    if (textoOriginal.trim() === '') {
        imagen.src = "./img/X.jpg";
        tituloMensaje.textContent = 'Debe añadir un texto';
        return;  // Salir de la función si no hay texto
    }

    var textoEncriptado = textoOriginal.replace(/[aeiou]/g, function (match) {
        return reemplazosEncriptar[match];
    });

    document.getElementById('texto').value = textoEncriptado;

    tituloMensaje.textContent = 'Texto encriptado correctamente';
    texto.textContent = " ";
    imagen.src = "./img/Check.webp";
    textoEncriptadoPrevio = true;
    document.getElementById('botonEncriptar').disabled = true; // Deshabilitar el botón de encriptar
}


function desEncriptarTexto() {
    if (!textoEncriptadoPrevio) {
        return;
    }

    let textoEncriptado = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('mensaje-encriptado');

    var textoDesencriptado = textoEncriptado.replace(/(ai|enter|imes|ober|ufat)/g, function (match) {
        return reemplazosDesencriptar[match];
    });

    document.getElementById('texto').value = textoDesencriptado;
    tituloMensaje.textContent = 'Texto desencriptado correctamente';
    document.getElementById('botonEncriptar').disabled = false; // Habilitar el botón de encriptar nuevamente
}

function copiarTexto() {
    let textoEncriptado = document.getElementById('texto').value;

    navigator.clipboard.writeText(textoEncriptado).then(function () {
        document.getElementById('textoCopiado').innerText = 'Texto copiado en el portapapeles';
    })
}