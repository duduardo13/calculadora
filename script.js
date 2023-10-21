var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

//preenchendo o visor 
function preencher(numero) {
    var aux = document.getElementById("visor").value;
    if (aux == "0") {
      document.getElementById("visor").value = numero;
    } else {
      document.getElementById("visor").value += numero;
    }
  }

  // Função para zerar o visor
function zerar() {
    document.getElementById("visor").value = 0;
    valor1 = "";
    operador = "";
  }


  //Escolhendo as operações basicas
  function operacao(sinal) {
    if (valor1 == "") {
      operador = sinal;
      valor1 = parseFloat(document.getElementById("visor").value);
      document.getElementById("visor").value = "";
    } else {
      switch (operador) {
        case "+":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) + parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "-":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) - parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "/":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) / parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        case "*":
          operador = sinal;
          valor2 = document.getElementById("visor").value;
          valor1 = parseFloat(valor1) * parseFloat(valor2);
          document.getElementById("visor").value = valor1;
          document.getElementById("visor").value = "";
          valor2 = "";
          break;
        default:
          resultado = valor1;
          break;
      }
    }
  }
  
  //Calculando

  function calcular() {
    switch (operador) {
      case "+":
        resultado = valor1 + parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "pt-BR"
        );
        break;
      case "-":
        resultado = valor1 - parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "pt-BR"
        );
        break;
      case "/":
        resultado = valor1 / parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "pt-BR"
        );
        break;
      case "*":
        resultado = valor1 * parseFloat(document.getElementById("visor").value);
        document.getElementById("visor").value = resultado.toLocaleString(
          "pt-BR"
        );
        break;
      default:
        resultado = valor1;
        document.getElementById("visor").value = resultado.toLocaleString(
          "pt-BR"
        );
        break;
    }
    valor1 = "";
    operador = "";
  }