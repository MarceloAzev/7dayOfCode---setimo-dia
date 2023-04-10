
let operacao = prompt("Qual operação deseja realizar?\n adição, subtração, multiplicação ou divisão?");


while(operacao.toLowerCase() != "sair"){
  let valor1 = prompt("Informe o primeiro número");
  let valor2 = prompt("Informe o segundo número");
  switch (operacao.toLowerCase()){
    case 'adição':
      soma(valor1,valor2);
      break;
    case 'subtração':
      subtração(valor1,valor2);
      break;
    case 'multiplicação':
      multiplicação(valor1,valor2);
      break;
    case 'divisão':
      divisão(valor1,valor2);
      break;
    default:
      alert("Opção inválida");

  }
  operacao = prompt("Qual operação deseja realizar?\n adição, subtração, multiplicação, divisão ou Sair?");
  
}

alert("até a próxima");


function number(numero){
  return parseFloat(numero);
}
function soma(x,y){
  const soma = number(x)+number(y);
  alert(x+"+"+y+"="+soma);
}


function subtração(x,y){
  const subtracao = x-y;
  alert(x+"-"+y+"="+subtracao)
}

function multiplicação(x,y){
  const multiplicacao = x*y;
  alert(x+"*"+y+"="+multiplicacao)
}

function divisão(x,y){
  const divisao = x/y;
  alert(x+"/"+y+"="+divisao)
}