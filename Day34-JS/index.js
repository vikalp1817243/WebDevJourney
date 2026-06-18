let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if(randomNumber1 > randomNumber2){
    const winner1=document.querySelector("h1");
    winner1.textContent="User 1 won, Yeah!!!";
    
}
else if(randomNumber2 > randomNumber1){
    const winner2=document.querySelector("h1");
    winner2.textContent="User 2 won, Cool!!!";
}
else{
    const draw=document.querySelector("h1");
    draw.textContent="Match Draw, Try again!!!";
}
/*
Suggestions:

Your current code is good for this project: it is readable, works correctly,
and clearly shows each step. A few small improvements could make it cleaner:

1. Store repeated selectors in variables.
   document.querySelector("h1") is used multiple times, so it can be saved once.

2. Use const instead of let when a value will not change.
   randomNumber1 and randomNumber2 are created once and never reassigned.

3. Create a helper function for rolling dice.
   This avoids repeating Math.floor(Math.random() * 6) + 1.

4. Create a helper function for changing dice images.
   This makes the code easier to expand if you add more players later.

Possible cleaner version:

const heading = document.querySelector("h1");
const player1Dice = document.querySelector(".img1");
const player2Dice = document.querySelector(".img2");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, diceNumber) {
    diceElement.setAttribute("src", `./images/dice${diceNumber}.png`);
}

const randomNumber1 = rollDice();
const randomNumber2 = rollDice();

updateDiceImage(player1Dice, randomNumber1);
updateDiceImage(player2Dice, randomNumber2);

if (randomNumber1 > randomNumber2) {
    heading.textContent = "User 1 won, Yeah!!!";
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "User 2 won, Cool!!!";
} else {
    heading.textContent = "Match Draw, Try again!!!";
}
*/
