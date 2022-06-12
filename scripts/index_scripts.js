// RULES FOR PLAYER
var bRulesOf = document.getElementById('byClose');
var bRulesOn = document.getElementsByClassName('play-rules');

bRulesOf.addEventListener('click', () => {
        document.getElementsByClassName('rules')[0].style.display = 'none';
        document.getElementsByClassName('black-screen')[0].style.display = 'none';
});
bRulesOn[0].addEventListener('click', () => {
    document.getElementsByClassName('rules')[0].style.display = 'block';
        document.getElementsByClassName('black-screen')[0].style.display = 'block';
});

// Select Card

const Valuegunting = document.getElementsByClassName('scissors1')[0];
const Valuepaper = document.getElementsByClassName('paper1')[0];
const Valuerock = document.getElementsByClassName('rock1')[0];


const displayChose = document.getElementsByClassName('play')[0];
const displayBattle = document.getElementsByClassName('flex3')[0];
const displayBattle2 = document.getElementsByClassName('picked')[0];
const cardPlayerColor = document.getElementsByClassName('gambar')[0];
const cardPplayerIMG = document.querySelectorAll('.gambar img')[0];
const cardHouseColor = document.getElementsByClassName('house')[0];
const cardGouseIMG = document.querySelectorAll('.house img')[0];

var ValueOfPlayer;

function Battle(src, color) {
        displayChose.style.display = 'none';
        displayBattle.style.display = 'flex';
        displayBattle2.style.display = 'flex';
        cardPplayerIMG.src = src;
        cardPlayerColor.style.backgroundImage = color;
};

function House(src, color) {
        cardGouseIMG.src = src;
        cardHouseColor.style.backgroundImage = color;
};

Valuegunting.addEventListener('click', () => {
        Battle('./images/icon-scissors.svg', 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))');
        randomi();
        ValueOfPlayer = 1;
});

Valuepaper.addEventListener('click', () => {
        Battle('./images/icon-paper.svg', 'linear-gradient(hsl(230, 89%, 62%) , hsl(230, 89%, 65%))');
        randomi();
        ValueOfPlayer = 2;
});

Valuerock.addEventListener('click', () => {
        Battle('./images/icon-rock.svg', 'linear-gradient(hsl(349, 71%, 52%) , hsl(349, 70%, 56%))');
        randomi();
        ValueOfPlayer = 3;
});