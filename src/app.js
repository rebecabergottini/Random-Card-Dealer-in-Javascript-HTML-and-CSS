/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const newCardButton = document.getElementById("new-card-btn");
  newCardButton.addEventListener("click", generateNewCard);

  setInterval(generateNewCard, 10000); // generará una nueva carta cada 10 segundos

  function generateNewCard() {
    let palos = ["♦", "♥", "♠", "♣"];
    let palosIndex = Math.floor(Math.random() * 4);
    let numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let numerosIndex = Math.floor(Math.random() * 13);

    let palo = palos[palosIndex];
    let color = palosIndex === 0 || palosIndex === 1 ? "color: red;" : "";

    let generadorRandomCards = elemento => {
      elemento.innerHTML = `<span style="${color}">${palo}</span>`;
    };

    generadorRandomCards(document.getElementById("superior"));
    generadorRandomCards(document.getElementById("inferior"));
    document.getElementById("numero").innerHTML = numeros[numerosIndex];
  }
};
