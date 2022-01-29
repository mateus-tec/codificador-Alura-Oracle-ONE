//codificador

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

let entrada = document.querySelector("#texto");
let saida = document.querySelector("#msg-cript");
let criptografar = document.querySelector("#btn-cripto");
let descriptografa = document.querySelector("#btn-descripto");
let botaoCopiar = document.querySelector("btn-copy");
let caixaRigth = document.querySelector(".msg")
let caixaLeft = document.querySelector(".form");

criptografar.addEventListener("click", function (event) {
  event.preventDefault();
  let textoVerificado = verificarTextCriptografado(entrada.value);
  if(entrada.value == ""){
    alert("A caixa de texto esta vazia");
  }
  else if (textoVerificado) {
    alert(" O texto ja esta criptografado!");
  } else {
    saida.value = criptografia(entrada);
    entrada.value = "";
    caixaRigth.style.display= "block";
    caixaLeft.style.display= "none";
  }
});

function criptografia(texto) {
  let textoCriptografado = texto.value
    .replace(/[e\é\è\ê]/gi, "enter")
    .replace(/[i\í\ì]/gi, "imes")
    .replace(/[a\á\à\â\ã]/gi, "ai")
    .replace(/[o\ó\ò\ô\õ]/gi, "ober")
    .replace(/[u\ú\ù]/gi, "ufat")
    .toLowerCase();
  return textoCriptografado;
}

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

descriptografa.addEventListener("click", function (event) {
  event.preventDefault();
  let textoVerificado = verificarTextCriptografado(entrada.value);
  if(entrada.value == ""){
    alert("A caixa de texto esta vazia");
  }else if(!textoVerificado) {
    alert(" O texto ja esta descriptografado!");
  } else {
    saida.value = descriptografia(entrada);
    entrada.value = "";
    caixaRigth.style.display= "block";
    caixaLeft.style.display= "none";

  }
  
});

function descriptografia(texto) {
  let textoDescriptografado = texto.value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .toLowerCase();
  return textoDescriptografado;
}

//Botão de copiar

function copiar() {
  let textocopiado = document.querySelector("#msg-cript");
  navigator.clipboard.writeText(textocopiado.value);
  textocopiado.value = "";
  caixaRigth.style.display= "none";
    caixaLeft.style.display= "block";
}

// verificação

let palavraChave = ["enter", "imes", "ai", "ober", "ufat"];

function verificarTextCriptografado(textoDigitado) {
  //let textoDigitado = document.querySelector("#msg-cript").value;
  let verficarCriptografia = palavraChave.some((e) =>
    textoDigitado.includes(e)
    
  );

  return verficarCriptografia;
}
