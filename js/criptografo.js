function criptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#criptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = criptografaTexto(campoTexto.value);

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        var minusculas = textoCriptografado.toLowerCase();
        
        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        var comAcento = textoCriptografado;
        var semAcento = comAcento.normalize("NFD");

        if (textoCriptografado === minusculas && textoCriptografado === semAcento && temCaracterEspecial(textoCriptografado) == false) {
            paragrafo.textContent = textoCriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}

criptografa();

function descriptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCryptography = document.querySelector("#descriptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoDescriptografado = descriptografaTexto(campoTexto.value);

        var campoVazio = document.querySelector(".sem-retorno");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto-criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        var minusculas = textoDescriptografado.toLowerCase();

        function temCaracterEspecial(str) {
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return specialChars.test(str);
        }

        var comAcento = textoDescriptografado;
        var semAcento = comAcento.normalize("NFD");

        if (textoDescriptografado === minusculas && textoDescriptografado === semAcento && temCaracterEspecial(textoDescriptografado) == false) {
            paragrafo.textContent = textoDescriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}

descriptografa();