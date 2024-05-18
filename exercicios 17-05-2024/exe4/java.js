let n1 = document.querySelector("#n1")
let n2 = document.querySelector("#n2")
let n3 = document.querySelector("#n3")
let btcalcular = document.querySelector("#btcalcular")
let resultado = document.querySelector("#h3resultado")

function calcular(){
    let vlr1 = Number(n1.value)
    let vlr2 = Number(n2.value)
    let vlr3 = Number(n3.value) 
    // calcular media aritimetica
      let mediaAritimetica = (vlr1 + vlr2 + vlr3) / 3

    //   media ponderada
    let somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5)
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos

    // So 
   
    let somaMedias = mediaAritimetica + mediaPonderada;

    // media das medias 
    let mediaMedias = somaMedias / 2;

    h3resultado.innerHTML = 
    "Media Aritmetica: "+mediaAritimetica+ +"br"+
    "Media Ponderada: "+mediaPonderada+ +"br"+
    " Soma das Medias "+somaMedias+ +"br"+
    "Media das Medias "+mediaMedias; +"br"
}

btcalcular.onclick = function(){
    calcular();
}