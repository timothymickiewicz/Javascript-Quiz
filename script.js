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
var checkClick = null;

// Initial alert describing game parameters
alert("Welcome to my Javascript Quiz! Correct answers are highlighted in blue and add 10 seconds to the timer. Incorrect answers are highlighted in red and subtract 10 seconds from the timer. You have 60 seconds to complete the quiz. High scores are logged so try your best! Press the start button to begin.");

// Creating functions for start button click
function initialClick() {
    if (document.body.style.background = "url(https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg)") {
        document.body.style.background = "url(https://media.gettyimages.com/videos/4k-rain-multiple-different-layers-isolated-over-black-tested-video-id695625094?s=640x640)"
        header.style.display = "none";
        btn.style.visibility = "hidden";
        toggleClass();
    }

        // Might use later
        // btn.innerText = "Check Answer";
        // btn.style.color = "chartreuse";
        // btn.style.fontSize = "2.5vw";
        // btn.style.backgroundColor = "black";
        // btn.style.borderColor = "chartreuse";
    
}
// functions for question 1
function nextOneTrue() {
    trueAnswer();
    one.removeEventListener("click", nextOneTrue, true);
    two.removeEventListener("click", nextTwoFalse, true);
    three.removeEventListener("click", nextThreeFalse, true);
    four.removeEventListener("click", nextFourFalse, true);
    movetoTwo();
}
function nextTwoFalse() {
    falseAnswer();
    one.removeEventListener("click", nextOneTrue, true);
    two.removeEventListener("click", nextTwoFalse, true);
    three.removeEventListener("click", nextThreeFalse, true);
    four.removeEventListener("click", nextFourFalse, true);
    movetoTwo();
}
function nextThreeFalse() {
    falseAnswer();
    one.removeEventListener("click", nextOneTrue, true);
    two.removeEventListener("click", nextTwoFalse, true);
    three.removeEventListener("click", nextThreeFalse, true);
    four.removeEventListener("click", nextFourFalse, true);
    movetoTwo();
}
function nextFourFalse() {
    falseAnswer();
    one.removeEventListener("click", nextOneTrue, true);
    two.removeEventListener("click", nextTwoFalse, true);
    three.removeEventListener("click", nextThreeFalse, true);
    four.removeEventListener("click", nextFourFalse, true);
    movetoTwo();
}
// functions for question 2
function q2nextOneFalse() {
    falseAnswer();
    one.removeEventListener("click", q2nextOneFalse, true);
    two.removeEventListener("click", q2nextTwoFalse, true);
    three.removeEventListener("click", q2nextThreeTrue, true);
    four.removeEventListener("click", q2nextFourFalse, true);
    movetoThree();
}
function q2nextTwoFalse() {
    falseAnswer();
    one.removeEventListener("click", q2nextOneFalse, true);
    two.removeEventListener("click", q2nextTwoFalse, true);
    three.removeEventListener("click", q2nextThreeTrue, true);
    four.removeEventListener("click", q2nextFourFalse, true);
    movetoThree();
}
function q2nextThreeTrue() {
    trueAnswer();
    one.removeEventListener("click", q2nextOneFalse, true);
    two.removeEventListener("click", q2nextTwoFalse, true);
    three.removeEventListener("click", q2nextThreeTrue, true);
    four.removeEventListener("click", q2nextFourFalse, true);
    movetoThree();
}
function q2nextFourFalse() {
    falseAnswer();
    one.removeEventListener("click", q2nextOneFalse, true);
    two.removeEventListener("click", q2nextTwoFalse, true);
    three.removeEventListener("click", q2nextThreeTrue, true);
    four.removeEventListener("click", q2nextFourFalse, true);
    movetoThree();
}
// Functions for question 3
function q3nextOneFalse() {
    falseAnswer();
    one.removeEventListener("click", q3nextOneFalse, true);
    two.removeEventListener("click", q3nextTwoFalse, true);
    three.removeEventListener("click", q3nextThreeFalse, true);
    four.removeEventListener("click", q3nextFourTrue, true);
    gotoEndGame();
}
function q3nextTwoFalse() {
    falseAnswer();
    one.removeEventListener("click", q3nextOneFalse, true);
    two.removeEventListener("click", q3nextTwoFalse, true);
    three.removeEventListener("click", q3nextThreeFalse, true);
    four.removeEventListener("click", q3nextFourTrue, true);
    gotoEndGame();
}
function q3nextThreeFalse() {
    falseAnswer();
    one.removeEventListener("click", q3nextOneFalse, true);
    two.removeEventListener("click", q3nextTwoFalse, true);
    three.removeEventListener("click", q3nextThreeFalse, true);
    four.removeEventListener("click", q3nextFourTrue, true);
    gotoEndGame();
}
function q3nextFourTrue() {
    trueAnswer();
    one.removeEventListener("click", q3nextOneFalse, true);
    two.removeEventListener("click", q3nextTwoFalse, true);
    three.removeEventListener("click", q3nextThreeFalse, true);
    four.removeEventListener("click", q3nextFourTrue, true);
    gotoEndGame();
}
// Creating questions for quiz
function firstQuestion() {
    question.innerText = "What is the fastest way to loop through an array?"; 
    one.innerText = "for (var i = 0, len = myArray.length; i < len; i++) { }";
    two.innerText = "var len = arr.length; while (len--) { }";
    three.innerText = "for (var i = array.length; i--; )";
    four.innerText = "while( --length ) { //or length--}";
    one.addEventListener("click", nextOneTrue, true);
    two.addEventListener("click", nextTwoFalse, true);
    three.addEventListener("click", nextThreeFalse, true);
    four.addEventListener("click", nextFourFalse, true);
}
function secondQuestion() {
    question.innerText = "What type of language is Javascript?"; 
    one.innerText = "Markup";
    two.innerText = "Programming";
    three.innerText = "Scripting";
    four.innerText = "Traditional";
    one.addEventListener("click", q2nextOneFalse, true);
    two.addEventListener("click", q2nextTwoFalse, true);
    three.addEventListener("click", q2nextThreeTrue, true);
    four.addEventListener("click", q2nextFourFalse, true);
}
function thirdQuestion() {
    question.innerText = "How do you create an array?"; 
    one.innerText = "Var array = {a, b, c};";
    two.innerText = "Var array = (a, b, c);";
    three.innerText = "Var array = <a, b, c>;";
    four.innerText = "Var notArray = [a, b, c];";
    one.addEventListener("click", q3nextOneFalse, true);
    two.addEventListener("click", q3nextTwoFalse, true);
    three.addEventListener("click", q3nextThreeFalse, true);
    four.addEventListener("click", q3nextFourTrue, true);
}
function endGame() {
    question.innerText = "You answered " + correct + " correct!"; 
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
}

// Creating point system
function checkAnswer() {
    if (check === true) {
        correct = correct + 1;
    }
    else if (check === false) {
        incorrect = incorrect + 1;
        timer = timer - 10;
    }
    console.log(correct);
    console.log(incorrect);
}

// Advance to subsequent questions
function movetoTwo() {
    if (correct + incorrect === 1) {
        secondQuestion();
    }
}
function movetoThree() {
    if (correct + incorrect > 1) {
        thirdQuestion();
    }
}

// End game page generates after point accumulation of 3
function gotoEndGame() {
    if (correct + incorrect > 2) {
        endGame();
    }
}
// Toggling all classes to quiz mode
function toggleClass() {
    hide.classList.remove("hide");
    one.classList.toggle("answersJS"),
    two.classList.toggle("answersJS");
    three.classList.toggle("answersJS");
    four.classList.toggle("answersJS");
}
//Start button click event
if (correct + incorrect === 0) {
    btn.addEventListener("click", function() {
        initialClick();
        firstQuestion();
    })
}

function trueAnswer() {
    check = true;
    checkAnswer();
}
function falseAnswer() {
    check = false;
    checkAnswer();
}
// make check function, if check function returns value of true, make check answer do an if statement "if check is true, do this and add 10 seconds to timer, else do this and subtract 10 seconds from timer, both lead to next question and log their responses into correct or missed variables, maybe as a number value that gets added to and printed to screen on quiz end page"
// maybe put all questions into a loop that reiterates until timer hits zero or questions run out
console.log(header.textContent);
console.log(btn.textContent);
