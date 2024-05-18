let vlr1 = document.querySelector("#vlr1")
let btCodigo = document.querySelector("#btCodigo")
let h3Resultado = document.querySelector("#h3Resultado");

function verificarCodigo(){
    let valor = Number(vlr1.value)

    if(valor === 1){
        h3Resultado.innerHTML = 
        "Parafuso!!"
    }
    else if(valor === 2){
        h3Resultado.innerHTML =
        "Porca!!"
    }
    else if(valor === 3){
        h3Resultado.innerHTML = 
        "Prego!!"
    }
    else{
    h3Resultado.innerHTML =
    "Diversos!!"
    }
}
btCodigo.onclick = function(){
    verificarCodigo();
}