"use strict";
// user 0 / Active
const activePlayer = document.querySelector(".active-player");
const betChip = document.querySelector(".bet-chip");
const chipOne = document.querySelector(".chip-1");
// const diceOne = document.querySelector(".dice-1");
// const diceZero = document.querySelector(".dice-0");
const rollOneZ = document.querySelector(".roll-1");
const rollTwoZ = document.querySelector(".roll-2");
const balance = document.querySelector(".balance-number");
const bet = document.querySelector(".bet");
const betNumberZero = document.querySelector(".bet-number-0");
const betJsZero = document.querySelector(".bet-js-user-0");
const diceBtn = document.querySelector(".dice-btn");
// const diceCheck = document.querySelector(".roll-1");

// bank
const bank = document.querySelector(".bank");
// user 1
const opponentPlayer = document.querySelector(".opponent-player");
const betChipTwo = document.querySelector(".bet-chip-1");
const chipTwo = document.querySelector(".chip-2");
const rollOneT = document.querySelector(".roll--1");
const rollTwoT = document.querySelector(".roll--2");
const betNumberOne = document.querySelector(".bet-number-1");
const betJsOne = document.querySelector(".bet-js-user-1");

// pirobebi active
bank.classList.add("hidden");
// diceOne.classList.add("hidden");
rollTwoZ.classList.add("hidden");
rollOneZ.classList.add("hidden");
betChip.classList.add("hidden");
rollOneT.classList.add("hidden");
rollTwoT.classList.add("hidden");
let playing = true;

// betBTN
bet.addEventListener("click", function() {
    betChip.classList.remove("hidden");
    bank.classList.remove("hidden");
    balance.textContent = `Balance: 110 GEL`;
});

const dicefunc = function() {};

// diceBTN
diceBtn.addEventListener("click", function() {
    if (playing) {
        const diceZ = Math.trunc(Math.random() * 6) + 1;
        const diceT = Math.trunc(Math.random() * 6) + 1;
        rollOneZ.classList.remove("hidden");
        rollTwoZ.classList.remove("hidden");
        rollOneZ.src = `/img/dice-${diceZ}.png`;
        rollTwoZ.src = `/img/dice-${diceT}.png`;
        let scoreZero = diceZ + diceT;
        console.log(scoreZero);
        const diceZt = Math.trunc(Math.random() * 6) + 1;
        const diceTt = Math.trunc(Math.random() * 6) + 1;
        rollOneT.classList.remove("hidden");
        rollTwoT.classList.remove("hidden");
        rollOneT.src = `/img/dice-${diceZt}.png`;
        rollTwoT.src = `/img/dice-${diceTt}.png`;
        let scoreOne = diceZt + diceTt;
        console.log(scoreOne);
        if (scoreZero > scoreOne) {
            bank.textContent = `User 0 win 20 GEL`;
            balance.textContent = `Balance: 130 GEL`;
        } else {
            bank.textContent = `User 1 win 20 GEL`;
        }
    }
});