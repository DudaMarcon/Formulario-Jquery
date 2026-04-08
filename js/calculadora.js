$("#calcular").click(function () {
    //recebendo dados da interface
    let n1 = parseInt($("#n1").val());
    let n2 = parseInt($("#n2").val());
    let operacao = $("input[name='operacao']:checked").val();
    
    //chamando a função calcular
    let resultado = calcular(n1, n2, operacao);
    
    //mostrando na interface
    $("#resultado").html("Resultado: " + resultado);
});

function limpar() {
    $("#n1").val("");
    $("#n2").val("");
    $("#n1").focus();
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao) {
    let resultado = 0;

    if (operacao == "soma") {
        resultado = n1 + n2;

    } else if (operacao == "sub") {
        resultado = n1 - n2;

    } else if (operacao == "mult") {
        resultado = n1 * n2;

    } else if (operacao == "div") {
        resultado = n1 / n2;

    } else if (operacao == "par") {

        if (n1 % 2 == 0) {
            alert("O Valor 1 é par");
        } else {
            alert("O Valor 1 é ímpar");
        }

    } else if (operacao == "negat") {

        if (n1 > 0) {
            alert("O Valor 1 é positivo");
        } else {
            alert("O Valor 1 é negativo");
        }

    } else {
        alert("Digite números válidos!");
    }

    return resultado;
}

/*
switch (operacao) {
    case "soma" :
        resultado =n1 + n2;
        break;
    case "sub" : 
        resultado = n1 - n2;
        break;

} */ 
