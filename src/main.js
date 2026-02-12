const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const question = document.getElementById('question');
const gif = document.getElementById('gif');

// Textes drôles qui s'affichent sur le bouton NON quand on clique dessus
const noTexts = [
  "t'es sûre ?",
  "vraiment ?",
  "vas-y frr",
  "nan mais pitié",
  "stppp",
  "t'abuses de ouf",
  "je vais être triste",
  "super super triste",
  "bon tu forces là",
  "MAIS ALLEZ DIS OUI PTN️"
  "jv canner tu veux même pas un peu"
  "même pas un poco loco ?"
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
  yesSize *= 1.2; // Augmente la taille de 30% à chaque clic
  yesBtn.style.fontSize = `${yesSize}rem`;
  yesBtn.style.padding = `${yesSize * 15}px ${yesSize * 30}px`;
});

// Action quand on clique sur OUI
yesBtn.addEventListener('click', () => {
  // On change le contenu de la page
  document.body.innerHTML = `
        <div class="container">
            <h1 class="success-message">j'en étais sûr tu m'aimes trop 🥰</h1>
            <h2 class="success-message">moi aussi un peu en vrai</h2>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXdkZzI2aGd4ZzFqdHl3dHNhdGkxNm9zcXhqNjhtZGRvdnZzaDhjcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qFmdpUKAFZ6rMobzzu/giphy.gif" alt="Success Gif" style="width: 300px; border-radius: 15px;">
        </div>
    `;
});
