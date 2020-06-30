let playBtn = document.querySelector(".intro button");
let options = document.querySelectorAll(".options button")
let winner = document.querySelector(".winner")
let playerHand = document.querySelector(".player-hand");
let computerHand = document.querySelector(".computer-hand");
let hands = document.querySelectorAll(".hands img")

let computerScore = 0;
let playerScore = 0;

playBtn.addEventListener("click", function() {
    let intro = document.querySelector(".intro")
    let match = document.querySelector(".match")

    intro.classList.add("fadeOut")
    match.classList.add("fadeIn")
})

function computerChoice() {
    let computerOptions = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3)
    return computerOptions[index]
}

function compareHands(computer, player) {

    if (computer === player) {
        winner.textContent = "It's a Tie!"
    }
    if (computer === "rock") {
        if (player === "paper") {
            winner.textContent = "You Win!"
            playerScore++;
        } else if (player === "scissors") {
            winner.textContent = "Computer Wins!"
            computerScore++;
        }
    } else if (computer === "paper") {
        if (player === "rock") {
            winner.textContent = "Computer Wins!"
            computerScore++;
        } else if (player === "scissors") {
            winner.textContent = "You Win!"
            playerScore++;
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            winner.textContent = "You Win!"
            playerScore++;
        } else if (player === "paper") {
            winner.textContent = "Computer Wins!"
            computerScore++;
        }
    }
}

function displayScore() {
    let playerScoreDisplay = document.querySelector(".player-score p")
    let computerScoreDisplay = document.querySelector(".computer-score p")

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function displayHands(computer, player) {
    playerHand.src = `assets/${player}.png`;
    computerHand.src = `assets/${computer}.png`
}

function animate() {
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

}

hands.forEach(function(hand) {
    hand.addEventListener("animationend", function() {
        this.style.animation = ""
    })
})

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function() {
        let computer = computerChoice();
        let player = this.textContent;
        animate();

        setTimeout(function() {
            compareHands(computer, player);
            displayScore();
            displayHands(computer, player);
        }, 2000)

    })
}