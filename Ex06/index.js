//Faça 3 prompts ao usuário: 
//1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
//2. no segundo, pergunte o primeiro valor que deseja calcular;
//3. no terceiro, o segundo valor que deseja calcular. 
//Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.
//Realize o commit do exercício resolvido.

var operacao = prompt('Vamos calcular: selecione a Operação (+,-,*,/)');
var num1 = parseFloat(prompt('primeiro número:'));
var num2 = parseFloat(prompt('segundo núemro:'));

switch (operacao) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert(num1 / num2);
        break;

    default:
        alert('Operação Inválida!');
        break;
}