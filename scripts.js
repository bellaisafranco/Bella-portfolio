const words = ["fruity","spring","juice","bitter","ripe","seasonal","messy","sweet","sour","delicious"];
const yumButton = document.getElementById("yumButton");
function generateRandomWord(){
    const randomIndex = Math.floor(Math.random()*words.length);
    const randomWord = words[randomIndex];
    document.querySelector("p").textContent='Random Word: ${randomWord}';
}
yumButton.addEventListener("click", generateRandomWord);