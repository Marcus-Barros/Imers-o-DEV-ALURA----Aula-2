var numeroSecreto = parseInt(Math.random() * 1001);

alert('Estamos começando a imersão DEV!')
alert('Neste jogo, iremos tentar adivinhar o número secreto que o computador escolheu para nós!')

while (chute != numeroSecreto) {
  var chute = prompt ('Digite um número entre 0 e 1000')
  if (chute == numeroSecreto) {
    alert ('Parabéns, você acertou o número secreto!')
  } else if (chute > numeroSecreto) {
    alert ('Você errou! O número secreto, o número escolhido foi muito alto!')
  } else if (chute < numeroSecreto) {
    alert ('Você errou! O número secreto, o número escolhido foi muito baixo!')  
  }
}
