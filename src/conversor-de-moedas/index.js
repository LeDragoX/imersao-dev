console.log("Cheguei!");

function Converter() {
  let valorElementoDolar = document.getElementById("valor").value;
  valorElementoDolar = parseFloat(valorElementoDolar);

  let valorEmReal = valorElementoDolar * 5.28; // 17/09/2021
  let result = `O valor em dólar de USD ${valorElementoDolar.toFixed(2)} para real é R$ ${valorEmReal.toFixed(2)} SEM IMPOSTOS.`;
  console.log(result);

  document.getElementById("valorConvertido").innerHTML = result;
}

console.log("Saindo...");
