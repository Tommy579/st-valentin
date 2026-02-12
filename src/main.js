const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const gif = document.getElementById('gif');

// Textes drôles qui s'affichent sur le bouton NON quand on clique dessus
const noTexts = [
  "t'es sûre ?",
  "vraiment ?",
  "pense-y bien...",
  "dernière chance 🥺",
  "stppp",
  "allez...",
  "je vais être triste...",
  "très très triste...",
  "bon j'arrête",
  "MAIS ALLEZ DIS OUI PTN️"
];

let noCount = 0;
let yesSize = 1.2; // Taille initiale du texte

// Action quand on clique sur NON
noBtn.addEventListener('click', () => {
  // Changer le texte du bouton Non
  if (noCount < noTexts.length) {
    noBtn.innerText = noTexts[noCount];
  } else {
    noBtn.innerText = "Dis oui !";
  }
  noCount++;

  // Faire grossir le bouton Oui
  yesSize *= 1.3; // Augmente la taille de 30% à chaque clic
  yesBtn.style.fontSize = `${yesSize}rem`;
  yesBtn.style.padding = `${yesSize * 15}px ${yesSize * 30}px`;
});

// Action quand on clique sur OUI
yesBtn.addEventListener('click', () => {
  // On change le contenu de la page
  document.body.innerHTML = `
        <div class="container">
            <h1 class="success-message">j'en étais sûr tu m'aimes trop 🥰</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXdkZzI2aGd4ZzFqdHl3dHNhdGkxNm9zcXhqNjhtZGRvdnZzaDhjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qFmdpUKAFZ6rMobzzu/giphy.gif" alt="Success Gif" style="width: 300px; border-radius: 15px;">
        </div>
    `;
});