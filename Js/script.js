
function calcular (){
    let altura = document.getElementById("Altura").value; 
    let resultado = document.getElementById("Resultado");
    let peso = document.getElementById("Peso").value;
    let valor = peso / (altura * altura); 
    var testando = resultado.innerText = `Seu IMC é ${valor}`
    


}



