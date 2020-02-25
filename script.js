// Establishing variables for js
var header = document.querySelector("h1");
var btn = document.querySelector(".htmlBtn");
var background = document.querySelector("body");
var question = document.querySelector(".questionText");
var one = document.getElementById("answer1");
var two = document.getElementById("answer2");
var three = document.getElementById("answer3");
var four = document.getElementById("answer4");
var hide = document.querySelector(".hide");
var check = null;
var correct = 0;
var incorrect = 0;
var timer = 60;
// Initial alert describing game parameters
alert("Welcome to my Javascript Quiz! Correct answers are highlighted in blue and add 10 seconds to the timer. Incorrect answers are highlighted in red and subtract 10 seconds from the timer. You have 60 seconds to complete the quiz. High scores are logged so try your best! Press the start button to begin.");
// Creating functions for button click
function initialClick() {
    if (document.body.style.background = "url(https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg)") {
        document.body.style.background = "url(https://media.gettyimages.com/videos/4k-rain-multiple-different-layers-isolated-over-black-tested-video-id695625094?s=640x640)"
        header.style.display = "none";
        btn.style.visibility = "hidden";
        toggleClass();

// I might use these for a check answer feature later on, currently liking the click button and it does everything on answer selection

        // btn.innerText = "Check Answer";
        // btn.style.color = "chartreuse";
        // btn.style.fontSize = "2.5vw";
        // btn.style.backgroundColor = "black";
        // btn.style.borderColor = "chartreuse";
    }
}
function firstQuestion() {
    question.innerText = "What is the fastest way to loop through an array?"; 
    one.innerText = "for (var i = 0, len = myArray.length; i < len; i++) { }";
    two.innerText = "var len = arr.length; while (len--) { }";
    three.innerText = "for (var i = array.length; i--; )";
    four.innerText = "while( --length ) { //or length--}";
    one.addEventListener("click", function(){
        one.style.backgroundColor = "blue";
        check = true;
        checkAnswer();
    })
    two.addEventListener("click", function(){
        two.style.backgroundColor = "red";
        check = false;
        checkAnswer();
    })
    three.addEventListener("click", function(){
        three.style.backgroundColor = "red";
        check = false;
        checkAnswer();
    })
    four.addEventListener("click", function(){
        four.style.backgroundColor = "red";
        check = false;
        checkAnswer();
    })
}
// Creating point system
function checkAnswer() {
    if (check === true) {
        correct = correct + 1;
        timer = timer + 10;
    }
    else {
        check === false;
        incorrect = incorrect + 1;
        timer = timer - 10;
    }
    console.log(correct);
    console.log(incorrect);
}
// Toggling all classes to quiz mode
function toggleClass() {
    hide.classList.remove("hide");
    one.classList.toggle("answersJS"),
    two.classList.toggle("answersJS");
    three.classList.toggle("answersJS");
    four.classList.toggle("answersJS");
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
