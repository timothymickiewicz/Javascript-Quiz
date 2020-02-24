// Establishing variables for js
var header = document.querySelector("h1");
var btn = document.querySelector(".htmlBtn");
var background = document.querySelector("body");
var p = document.querySelectorAll("p");
// Initial alert describing game parameters
alert("Correct answers add 10 seconds to timer. Incorrect answers subtract 10 seconds from timer. High scores are logged so try your best! Press the start button to begin.");
// Creating functions for button click
function initialClick() {
    if (document.body.style.background = "url(https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg)") {
        document.body.style.background = "url(https://media.gettyimages.com/videos/4k-rain-multiple-different-layers-isolated-over-black-tested-video-id695625094?s=640x640)"
        btn.innerText = "Check Answer";
        btn.style.fontSize = "2.5vw";
        p.body.fontColor = "chartreuse";
    }
}
btn.addEventListener("click", function() {
    initialClick();
});


function checkAnswer() {
    if (check === true) {

    }
}

console.log(header.textContent);
console.log(btn.textContent);