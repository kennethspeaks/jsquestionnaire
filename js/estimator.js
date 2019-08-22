/*  
Title:      BKreative Website Estimator
Author:     Ken Elliott (@kennethspeaks)
For:        BKreative Media Solutions
Website:    https://www.bkreative.net
Version:    1.0.0
*/

//Estimate Variables
var price = 0;
var validation = false;
var questionNumber = 0;

//Question Element Container
var questionElement = document.getElementById('options');
var questionQuestion = document.getElementById('question');
var optionOne = document.getElementById('first_option');
var optionTwo = document.getElementById('second_option');
var optionThree = document.getElementById('third_option');
var optionFour = document.getElementById('fourth_option');

const questions = [
    ["Q1. What type of branding service are you looking for?", "A1", "A2", "A3", "A4"],
    ["Q2. Testing Question 2", "A1", "A2", "A3", "A4"],
    ["Q3. Testing Question 3", "A1", "A2", "A3", "A4"],
    ["Q4. Testing Question 4", "A1", "A2", "A3", "A4"],
    ["Q5. Testing Question 5", "A1", "A2", "A3", "A4"],
    ["Q6. Testing Question 6", "A1", "A2", "A3", "A4"],
    ["Q7. Testing Question 7", "A1", "A2", "A3", "A4"],
    ["Q8. Testing Question 8", "A1", "A2", "A3", "A4"],
    ["Q9. Testing Question 9", "A1", "A2", "A3", "A4"],
    ["Q10. Testing Question 10", "A1", "A2", "A3", "A4"]
];

/*************************************/
/*** Begin Estimator Questionnaire ***/
/*************************************/

//Question Animations
function nextQuestion(){
    validation = answerValidation();
    if (validation){
        questionElement.className = "container options transitionOut";
        setTimeout(function(){
            questionNumber++;
            questionElement.className = "container options transitionIn";
            questionQuestion.innerHTML = questions[questionNumber][0];}, 750);
    }
}

function previousQuestion(){
    validation = answerValidation();
    if (validation){
        questionElement.className = "container options transitionOut";
        setTimeout(function(){
            questionNumber--;
            questionElement.className = "container options transitionIn";
            questionQuestion.innerHTML = questions[questionNumber][0];}, 750);
    }
}

//Validation
function answerValidation(){
    //Confirms An Answer Has Been Selected
    if(!(optionOne.checked) || !(optionTwo.checked) || !(optionThree.checked) || !(optionFour.checked)){
        validation = false;
    }
    if(questionNumber<0 || questionNumber>questions.length){
        validation = false;
    }
    else{validation = true;}
    alert(questionNumber + " " + validation);
    return validation;
}

//Key Listener
document.onkeydown = checkKey;
function checkKey(e){
    e = e || window.event;
    if (e.keyCode == '37'){previousQuestion();}
    if (e.keyCode == '39'){nextQuestion();}
}