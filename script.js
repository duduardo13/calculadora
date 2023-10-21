var valor1 = "";
var valor2 = "";
var resultado;
var operador = "";
var del;

function preencher(numero) {
    var aux = document.getElementById("visor").value;
    if (aux == "0") {
      document.getElementById("visor").value = numero;
    } else {
      document.getElementById("visor").value += numero;
    }
  }