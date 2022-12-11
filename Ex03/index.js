//Utilizando estrutura de repetição realize a tabuada do número x e exiba ela da seguinte forma:
//2 x 0 = 0
//2 x 1 = 2....
//2 x 10 = 20
//O número para realizar a tabuada deve ser solicitado via prompt e o resultado apresentado via alert.
//dica: de uma olhadinha no for.
//Realize o commit do exercício resolvido.

var numero = parseInt(prompt('Informe o número:'));

if(isNaN(numero)){
    alert('Caracter Inválido!');
} else{
    var resultado = ''
    for (var i = 0; i <= 10; i++){
        resultado += numero + 'x' + i + ' = ' + (numero * i) + '\n';
        // resultado += `${numero} x ${i} = ${numero * i} \n`;  Interpolacao simples
    }
    alert (resultado);
}