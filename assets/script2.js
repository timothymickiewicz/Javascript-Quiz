var hs1 = document.getElementById("highScore1");
var hs2 = document.getElementById("highScore2");
var hs3 = document.getElementById("highScore3");
var hs4 = document.getElementById("highScore4");
var hs5 = document.getElementById("highScore5");
var header = document.querySelector("h1");
// Grabbing info from local storage
var initials = localStorage.getItem("userInitials");
var score = localStorage.getItem("score");
var parsedInitials = JSON.parse(initials);
var parsedScore = JSON.parse(score);
if (initials && score === undefined) {
    var parsedInitials = ["cleared"];
    var parsedScore = ["cleared"];
}

// Putting local storage onto page
for (var i = 0; i < parsedScore.length; i++) {
    var p = document.createElement("P");
    document.body.appendChild(p);
    p.innerText = parsedInitials[i] + " :  " + parsedScore[i];
}
header.innerText = "High Scores";
function clearBtn() {
    var button = document.createElement("BUTTON");
    document.body.appendChild(button);
    button.innerText = "Clear High Scores";
    button.classList.toggle("button");
    button.addEventListener("click", function() {
        localStorage.clear();
    });    
}
clearBtn();

