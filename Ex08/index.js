var numero = parseInt(prompt('Informe o número:'));
var raiz = parseInt(prompt('Informe o raiz:'));

var soma = numero
var resultado = numero.toString();

for(var i = 0; i < 9; i++){
    soma += raiz;
    resultado += ',' + soma;
}

alert('A PA é: ' + resultado);
