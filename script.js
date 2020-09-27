var botaoCalcular = document.getElementById('calcular');
var inputPeso = document.getElementById('peso');
var inputAltura = document.getElementById('altura');
var resultadoCalculo = document.getElementById('resultadoCalculo');
var resultadoTexto = document.getElementById('resultadoTexto');

botaoCalcular.addEventListener('click', calcular);

    function calcular() {
        var peso = inputPeso.value;
        var altura = inputAltura.value;
        var resultado = peso / (altura*altura);
        resultadoCalculo.innerText = resultado;

        if (resultado < 16){
            resultadoTexto.innerText = "Magreza grave";
            resultadoTexto.style.color = 'red';
         } else
        if (resultado == 16 || resultado < 17){
            resultadoTexto.innerText = "Magreza moderada";
            resultadoTexto.style.color = 'orange';
        } else
        if (resultado == 17 || resultado < 18.5){
            resultadoTexto.innerText = "Magreza leve";
            resultadoTexto.style.color = 'blue';
        } else
        if (resultado == 18.5 || resultado < 25){
            resultadoTexto.innerText = "Saudavel";
            resultadoTexto.style.color = 'green';
        } else
        if (resultado == 25 || resultado < 30){
            resultadoTexto.innerText = "Sobrepeso";
            resultadoTexto.style.color = 'blue';
        } else
        if (resultado == 30 || resultado < 35){
            resultadoTexto.innerText = "Obesidade grau I";
            resultadoTexto.style.color = 'orange';
        } else
        if (resultado == 35 || resultado < 40){
            resultadoTexto.innerText = "Obesidade grau II (severa)";
            resultadoTexto.style.color = 'red';
        } else
        if (resultado == 40 || resultado < 40){
            resultadoTexto.innerText = "Obesidade grau III (mórbida)";
            resultadoTexto.style.color = 'red';
        } 
        else 
            resultadoTexto.innerText = "Digite valores válidos"
        

        inputPeso.value="";
        inputAltura.value="";

    }

  