function encriptado() {
    let texto = document.getElementById("texto").value;
    let tituloTexto = document.getElementById("titulo-texto");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

 if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloTexto.textContent = "¡Texto encriptado!";
    parrafo.textContent = "";
    lupa.src = "./imgs/encriptado.jpg";
 } else {
    lupa.src = "./imgs/encriptar.png";
    tituloTexto.textContent = "Ningún texto encontrado";
    parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
    Swal.fire({
        title: "¡Ups!",
        text: "Debes ingresar un texto",
        icon: "error",
        confirmButtonText: "Aceptar",
        customClass: {
            title: 'my-swal-title',
            content: 'my-swal-text',
            confirmButton: 'my-swal-button',
        }
    });
 }                            
}

function desencriptado() {
    let texto = document.getElementById("texto").value;
    let tituloTexto = document.getElementById("titulo-texto");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");
    
    let textoCifrado = texto
        .replace(/enter/gi , "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloTexto.textContent = "¡Texto desencriptado!";
            parrafo.textContent = "";
            lupa.src = "./imgs/desencriptado.jpg";
        } else {
            lupa.src = "./imgs/encriptar.png";
            tituloTexto.textContent = "Ningún texto encontrado";
            parrafo.textContent = "Ingresa el texto a encriptar o desencriptar";
            Swal.fire({
                title: "¡Ups!",
                text: "Debes ingresar un texto",
                icon: "error",
                confirmButtonText: "Aceptar",
                customClass: {
                    title: 'my-swal-title',
                    content: 'my-swal-text',
                    confirmButton: 'my-swal-button',
                }
            });
        }
}