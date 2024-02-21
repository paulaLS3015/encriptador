document.addEventListener("DOMContentLoaded", function () {

    // Método para encriptar el texto
    function encriptarTexto() {
      const textoInput = document.getElementById("texto").value.toLowerCase();
      const resultadoTextArea = document.getElementById("resultado");
      const resultado = textoInput
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
  
      resultadoTextArea.value = resultado;
  
      // Mostrar el div con el texto
      document.querySelector(".sin_texto").hidden = true;
      document.querySelector(".con_texto").hidden = false;
    }
  
    // Método para desencriptar el texto
    function desencriptarTexto() {
      const textoInput = document.getElementById("texto").value.toLowerCase();
      const resultadoTextArea = document.getElementById("resultado");
      const resultado = textoInput
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
  
      resultadoTextArea.value = resultado;
  
      // Mostrar el div con el texto
      document.querySelector(".sin_texto").hidden = true;
      document.querySelector(".con_texto").hidden = false;
    }
  
    // Método para copiar el texto al portapapeles
    function copiarTexto() {
      const resultadoTextArea = document.getElementById("resultado");
      resultadoTextArea.select();
      document.execCommand("copy");
    }
  
    // Agregar eventos a los botones
    document.getElementById("encriptar").addEventListener("click", function (event) {
      event.preventDefault();
      encriptarTexto();
    });
  
    document.getElementById("desencriptar").addEventListener("click", function (event) {
      event.preventDefault();
      desencriptarTexto();
    });
  
    document.getElementById("copiar").addEventListener("click", function (event) {
      event.preventDefault();
      copiarTexto();
    });
  
    // Validar y mostrar el div adecuado al escribir en el textarea
    const textoTextArea = document.getElementById("texto");
    textoTextArea.addEventListener("input", function () {
      const sinTextoDiv = document.querySelector(".sin_texto");
      const conTextoDiv = document.querySelector(".con_texto");
  
      if (textoTextArea.value.trim() === "") {
        sinTextoDiv.hidden = false;
        conTextoDiv.hidden = true;
      } else {
        sinTextoDiv.hidden = true;
        conTextoDiv.hidden = false;
      }
    });
  });
  