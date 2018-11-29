//Variable List
var winTotal = 0;
var lossTotal = 0;
var userScore = 0;
var minMagicNumber = 19;
var maxMagicNumber = 120;
var magicNumber = createMagicNumber(minMagicNumber, maxMagicNumber);
var minCrystalNumber = 1;
var maxCrystalNumber = 12;
var blackCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
var blueCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
var greenCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
var redCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);

//Function that creates a random number from 19-120
function createMagicNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function that create random values for each colored crytal
function createCrystalNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function that restarts the game
function restartGame() {
    userScore = 0;
    $("#game-user-score").text(userScore);
    magicNumber = createMagicNumber(minMagicNumber, maxMagicNumber);
    $("#game-magic-number").text(magicNumber);
    blackCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
    blueCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
    greenCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
    redCrystalNumber = createCrystalNumber(minCrystalNumber, maxCrystalNumber);
    $(".crystal-value").text(" ");
}

//Populates the statistics at the start of the game
$("#game-magic-number").text(magicNumber);
$("#game-win-total").text(winTotal);
$("#game-loss-total").text(lossTotal);
$("#game-user-score").text(userScore);


//On click, adds the crystal value to the total score
//Checks to see if number matches or goes over magic number
//Produces Win/Loss alert and adds to counter accordingly
$(".black-crystal-image").on("click", function () {
    userScore += blackCrystalNumber;
    $("#game-user-score").text(userScore);
    $(".black-crystal-value").text(blackCrystalNumber);
    if (userScore === magicNumber) {
        alert("You have won!");
        winTotal++;
        $("#game-win-total").text(winTotal);
        restartGame();
    } else if (userScore > magicNumber) {
        alert("You have lost!");
        lossTotal++;
        $("#game-loss-total").text(lossTotal);
        restartGame();
    }
});

$(".blue-crystal-image").on("click", function () {
    userScore += blueCrystalNumber;
    $("#game-user-score").text(userScore);
    $(".blue-crystal-value").text(blueCrystalNumber);
    if (userScore === magicNumber) {
        alert("You have won!");
        winTotal++;
        $("#game-win-total").text(winTotal);
        restartGame();
    } else if (userScore > magicNumber) {
        alert("You have lost!");
        lossTotal++;
        $("#game-loss-total").text(lossTotal);
        restartGame();
    }
});

$(".green-crystal-image").on("click", function () {
    userScore += greenCrystalNumber;
    $("#game-user-score").text(userScore);
    $(".green-crystal-value").text(greenCrystalNumber);
    if (userScore === magicNumber) {
        alert("You have won!");
        winTotal++;
        $("#game-win-total").text(winTotal);
        restartGame();
    } else if (userScore > magicNumber) {
        alert("You have lost!");
        lossTotal++;
        $("#game-loss-total").text(lossTotal);
        restartGame();
    }
});

$(".red-crystal-image").on("click", function () {
    userScore += redCrystalNumber;
    $("#game-user-score").text(userScore);
    $(".red-crystal-value").text(redCrystalNumber);
    if (userScore === magicNumber) {
        alert("You have won!");
        winTotal++;
        $("#game-win-total").text(winTotal);
        restartGame();
    } else if (userScore > magicNumber) {
        alert("You have lost!");
        lossTotal++;
        $("#game-loss-total").text(lossTotal);
        restartGame();
    }
});