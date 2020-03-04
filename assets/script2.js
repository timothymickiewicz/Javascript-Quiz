var hs1 = document.getElementById("highScore1");
var hs2 = document.getElementById("highScore2");
var hs3 = document.getElementById("highScore3");
var hs4 = document.getElementById("highScore4");
var hs5 = document.getElementById("highScore5");
var header = document.querySelector("h1");
var inputArray = JSON.parse(localStorage.getItem("userInitials"));
var scoreArray = JSON.parse(localStorage.getItem("score"));
// Grabbing info from local storage
// if (localStorage.getItem("userInitials") == null){
//     localStorage.setItem("userInitials", "TM");
//     var inputArray = [];
// }
// else if (localStorage.getItem("userInitials")) {
//     var inputArray = JSON.parse(localStorage.getItem("userInitials"));
// }
// if (localStorage.getItem("score") == null) {
//     localStorage.setItem("score", 0);
//     var scoreArray = [];
// }
// else if (localStorage.getItem("score")) {
//     var scoreArray = JSON.parse(localStorage.getItem("score"));
// }
// Putting local storage onto page
for (var i = 1; i < scoreArray.length; i++) {
    var p = document.createElement("P");
    document.body.appendChild(p);
    p.innerText = inputArray[i] + " :  " + scoreArray[i];
}
header.innerText = "High Scores";
function clearBtn() {
    var button = document.createElement("BUTTON");
    document.body.appendChild(button);
    button.innerText = "Clear High Scores";
    button.classList.toggle("button");
    button.addEventListener("click", function() {
        for (var i = 0; i < scoreArray.length; i++) {
            p.style.display = "none";
            button.style.display = "none";
        }
        localStorage.clear();
        location.href = "index.html";
    });    
}
clearBtn();

