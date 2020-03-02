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
var form = document.querySelector("form");
var submit = document.getElementById("submitHS");
var hs = document.getElementById("highScores");
var check = null;
var correct = 0;
var incorrect = 0;
var sec = 60;
var initials = localStorage.getItem("userInitials");
var score = localStorage.getItem("score");
var inputArray = JSON.parse(initials);
var scoreArray = JSON.parse(score);
if (initials && score === undefined) {
    var inputArray = [];
    var scoreArray = [];
}

// Creating dynamic variables for storing scores and intials


// Initial alert describing game parameters
alert("Welcome to my Javascript Quiz! Correct answers are added to your end game score. Incorrect answers subtract 10 seconds from the timer. You have 60 seconds to complete the quiz. High scores are saved so try your best! Press the start button to begin.");
//Start button click event
if (correct + incorrect === 0) {
    btn.addEventListener("click", function() {
        initialClick();
        firstQuestion();
    })
}
// Toggling all classes to quiz mode
function toggleClass() {
    hide.classList.remove("hide");
    one.classList.toggle("answersJS"),
    two.classList.toggle("answersJS");
    three.classList.toggle("answersJS");
    four.classList.toggle("answersJS");
}
// Creating functions for start button click
function initialClick() {
    if (document.body.style.background = "url(https://static.makeuseof.com/wp-content/uploads/2017/10/What-Is-JavaScript-Featured-670x335.jpg)") {
        document.body.style.background = "url(https://media.gettyimages.com/videos/4k-rain-multiple-different-layers-isolated-over-black-tested-video-id695625094?s=640x640)"
        header.style.display = "none";
        hs.style.visibility = "hidden";
        form.style.visibility = "hidden";
        btn.style.visibility = "hidden";
        toggleClass();
        // Creating a timer function that runs after start click
        function startTimer(){
            var timer = setInterval(function(){
                sec--;
                document.getElementById('timer').innerHTML="Time: " + sec;
                if (sec <= 0) {
                    clearInterval(timer);
                    alert("Time is up!");
                    endGame();
                }
                else if (correct + incorrect == 3) {
                    clearInterval(timer);
                }
            }, 1000);
            }
        startTimer();
    }
}
// Creating point system
function checkAnswer() {
    if (check === true) {
        correct = correct + 1;
    }
    else if (check === false) {
        incorrect = incorrect + 1;
        sec -= 10; // Subtracting time for missed answers
    }
    console.log(correct);
    console.log(incorrect);
}
// Establishing answer as true or false
function trueAnswer() {
    check = true;
    checkAnswer();
}
function falseAnswer() {
    check = false;
    checkAnswer();
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
// Removing click events after each question
function removeq1() {
    one.removeEventListener("click", nextOneTrue, true);
    two.removeEventListener("click", nextTwoFalse, true);
    three.removeEventListener("click", nextThreeFalse, true);
    four.removeEventListener("click", nextFourFalse, true);
}
function removeq2() {
    one.removeEventListener("click", q2nextOneFalse, true);
    two.removeEventListener("click", q2nextTwoFalse, true);
    three.removeEventListener("click", q2nextThreeTrue, true);
    four.removeEventListener("click", q2nextFourFalse, true);
}
function removeq3() {
    one.removeEventListener("click", q3nextOneFalse, true);
    two.removeEventListener("click", q3nextTwoFalse, true);
    three.removeEventListener("click", q3nextThreeFalse, true);
    four.removeEventListener("click", q3nextFourTrue, true);
}
// Functions for the answers on question 1
function nextOneTrue() {
    trueAnswer();
    removeq1();
    movetoTwo();
}
function nextTwoFalse() {
    falseAnswer();
    removeq1();
    movetoTwo();
}
function nextThreeFalse() {
    falseAnswer();
    removeq1();
    movetoTwo();
}
function nextFourFalse() {
    falseAnswer();
    removeq1();
    movetoTwo();
}
// Functions for the answers on question 2
function q2nextOneFalse() {
    falseAnswer();
    removeq2();
    movetoThree();
}
function q2nextTwoFalse() {
    falseAnswer();
    removeq2();
    movetoThree();
}
function q2nextThreeTrue() {
    trueAnswer();
    removeq2();
    movetoThree();
}
function q2nextFourFalse() {
    falseAnswer();
    removeq2();
    movetoThree();
}
// Functions for the answers on question 3
function q3nextOneFalse() {
    falseAnswer();
    removeq3();
    gotoEndGame();
}
function q3nextTwoFalse() {
    falseAnswer();
    removeq3();
    gotoEndGame();
}
function q3nextThreeFalse() {
    falseAnswer();
    removeq3();
    gotoEndGame();
}
function q3nextFourTrue() {
    trueAnswer();
    removeq3();
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
    form.style.visibility = "visible";
    hs.style.visibility = "visible";
    submit.addEventListener("click", function(event){
        event.preventDefault()
        initialsAdd();
        form.reset();
      });
}
// Local storage functions
function scoreAdd() {
    scoreArray.push(correct);
    window.localStorage.setItem("score", JSON.stringify(scoreArray));
    console.log(scoreArray);
}
function initialsAdd() {
    var initialsInput = document.getElementById("initials-input").value;
    if (initialsInput === initialsInput.toUpperCase() && initialsInput.length === 2) {
        inputArray.push(initialsInput);
        scoreAdd();
    }
    else {
        alert("You must enter your initials in upper case! Please try again.")
    }
    window.localStorage.setItem("userInitials", JSON.stringify(inputArray));
}