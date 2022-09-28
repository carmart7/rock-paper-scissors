// Rock Paper Scissors
// 0. var for WinsLosses,Ties set to 0
var wins = 0;
var losses = 0;
var ties = 0;
// 1. Window Prompt (R, P, S)
//      assign var humanChoice
var humanChoice = prompt("What's your choice (R, P, S)?");
// 2. Generate Input
//      assign var computerChoice
var choices = ['R', 'P', 'S'];
var computerChoice = choices[computerNumber()];

// 3. Compare humanChoice with computerChoice
//      A) If humanChoice === computerChoice prompt Tie
            // 1a) Prompt tie increase Tie Score
//      B) If humanChoice = R
//          1a computerChoice = S prompt Win
                // a) Add 1 Win for User
//          2a computerChoice = P prompt Lose
//                 -- Add 1 Loss for User

//      C)  If humanChoice = P

//          1a computerChoice = R prompt Win
//                 -- Add 1 Win for User

//          2a computerChoice = S prompt Lose//    
//                 -- Add 1 Loss for User

//      D)  If humanChoice = S
//          1a computerChoice = P prompt Win
//          2a computerChoice = R prompt Lose
if (humanChoice == computerChoice) {
    alert("That's a tie!");
    ties = ties + 1;
} else if (humanChoice == 'R'){
    if (computerChoice == 'S') {
        alert('You win!');
        wins = wins + 1;
    } else if (computerChoice == 'P') {
        alert('You lose!');
        losses = losses + 1;
    }
} else if (humanChoice == 'P'){
    if (computerChoice == 'R') {
        alert('You win!');
        wins = wins + 1;
    } else if (computerChoice == 'S') {
        alert('You lose!');
        losses = losses + 1;
    }
} else if (humanChoice == 'S'){
    if (computerChoice == 'P') {
        alert('You win!');
        wins = wins + 1;
    } else if (computerChoice == 'R') {
        alert('You lose!');
        losses = losses + 1;
    }
}
// 4. Declare Wins, Losses, Ties
// 5. Prompt Scorecard
// 6. Prompt Play Again?

function computerNumber() {
    return Math.floor(Math.random()*3);
}