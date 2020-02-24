// Establishing variables for js
var header = document.querySelector("h1");
var btn = document.querySelector(".htmlBtn");
var background = document.querySelector("body");
var question = document.querySelector(".questionText");
var one = document.getElementById("answer1");
var two = document.getElementById("answer2");
var three = document.getElementById("answer3");
var four = document.getElementById("answer4");
// Initial alert describing game parameters
alert("Correct answers add 10 seconds to timer. Incorrect answers subtract 10 seconds from timer. High scores are logged so try your best! Press the start button to begin.");
// Creating functions for button click
function initialClick() {
    if (document.body.style.background = "url(https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg)") {
        document.body.style.background = "url(https://media.gettyimages.com/videos/4k-rain-multiple-different-layers-isolated-over-black-tested-video-id695625094?s=640x640)"
        header.style.display = "none";
        btn.innerText = "Check Answer";
        btn.style.color = "chartreuse";
        btn.style.fontSize = "2.5vw";
        btn.style.backgroundColor = "black";
        btn.style.borderColor = "chartreuse";
    }
}
function firstQuestion() {
    toggleClass();
    question.innerText = "What is the fastest way to loop through an array?"; 
    one.innerText = "for (var i = 0, len = myArray.length; i < len; i++) { }";
    two.innerText = "var len = arr.length; while (len--) { }";
    three.innerText = "for (var i = array.length; i--; )";
    four.innerText = "while( --length ) { //or length--}";
}
// Toggling all classes to quiz mode
function toggleClass() {
    for (i=0; i <= 4; i++) {
        one.classList.toggle("answersJS"),
        two.classList.toggle("answersJS");
        three.classList.toggle("answersJS");
        four.classList.toggle("answersJS");
    }
}
// Button click event
btn.addEventListener("click", function() {
    initialClick();
    firstQuestion();
});

// make check function, if check function returns value of true, make check answer do an if statement "if check is true, do this and add 10 seconds to timer, else do this and subtract 10 seconds from timer, both lead to next question and log their responses into correct or missed variables, maybe as a number value that gets added to and printed to screen on quiz end page"
// maybe put all questions into a loop that reiterates until timer hits zero or questions run out
console.log(header.textContent);
console.log(btn.textContent);