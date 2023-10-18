var cpf = document.getElementById("senha")
var atual = document.getElementById("atual");

cpf.oninput = function (event) {
  atual.innerHTML = senha.value;
};