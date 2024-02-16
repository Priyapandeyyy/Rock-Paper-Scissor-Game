const game = () => {
    let pScore = 0;
    let cScore = 0;


    // start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });

        // Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(options => {
            options.addEventListener("click", function(){
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // Here is where we call compare hands.
                
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    console.log('textContet',this.textContent);
                // Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                // Animaion
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const UpdateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector(".winner");
        // Cheking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        // checking for a rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player wins";
                pScore++;
                UpdateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                UpdateScore();
                return;
            }
        }

        // Check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer wins";
                pScore++;
                UpdateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                cScore++;
                UpdateScore();
                return;
            }
        }

        // Check for Scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer wins";
                pScore++;
                UpdateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                cScore++;
                UpdateScore();
                return;
            }
        }
    };

    // is call the inner function
    startGame();
    playMatch();
};

// start the game function

game();