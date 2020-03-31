var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Gerador de números aleatorios entre 1 e 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png Gera o arquivos com os números randomicos
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Gera o segundo número randomico
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

/**
 * Analisa as variaveis e verifica qual é a maior, para saber quem é o vencedor
 */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}