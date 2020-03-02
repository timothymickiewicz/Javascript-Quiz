var hs1 = document.getElementById("highScore1");
var hs2 = document.getElementById("highScore2");
var hs3 = document.getElementById("highScore3");
var hs4 = document.getElementById("highScore4");
var hs5 = document.getElementById("highScore5");
// Getting info from local storage
function initialsAndScore() {
    var initials = localStorage.getItem("userInitials");
    var score = localStorage.getItem("score");
    var parsedInitials = JSON.parse(initials);
    var parsedScore = JSON.parse(score);
    hs1.innerHTML = parsedInitials[0] + " :  " + parsedScore[0];
    console.log(parsedScore[0]);
    console.log(parsedInitials[0]);
}
// Displaying the info to the page
initialsAndScore()
