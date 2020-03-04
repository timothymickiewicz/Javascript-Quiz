var header = document.querySelector("h1");
var inputArray = JSON.parse(localStorage.getItem("userInitials"));
var scoreArray = JSON.parse(localStorage.getItem("score"));
// Loop starts at 1 index to ignore default value in the arrays
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

