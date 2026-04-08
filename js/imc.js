$("#calcular").click(function () {
    //recebendo dados da interface
    let alt = parseFloat($("#alt").val());
    let pes = parseFloat($("#pes").val());
    
    //chamando a função calcular
    let resultado = calcular(alt, pes);
    //mostrando na interface
    if (resultado < 18.5) {
    imc = " Isso mostra que você está: Abaixo do peso";
}
else if (resultado < 25){
    imc = " Isso mostra que você está: Normal";
    }

else if (resultado < 30){
    imc = " Isso mostra que você está: Sobrepeso";
}
else if (resultado < 35){
    imc = " Isso mostra que você está: Obesidade I";
}
else if (resultado < 40){
    imc = " Isso mostra que você está: Obesidade II";
}
else if (resultado >= 40){
    imc = " Isso mostra que você está: Obesidade III";
}
 else {
    alert("Digite números válidos!");
}
    $("#resultado").html("Calculando o IMC com altura: " + alt + " e peso: " + pes  + "<br>Seu IMC é: " + resultado.toFixed(2) + "<br>" + imc);
});

function calcular(alt, pes) {
     return pes / (alt * alt);
}
function limpar() {
    $("#alt").val("");
    $("#pes").val("");
    $("#alt").focus();
    $("#resultado").html("Resultado: "); }

