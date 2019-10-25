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
var previousButton = document.getElementById('previous_btn');
var nextButton = document.getElementById('next_btn');

const questions = [
    {
        question: "What type of branding service are you looking for?",
        answers: {a1: "Graphic Services", a2: "Web Services", a3: "Both"},
        descriptions: {a1: "Answer Choice Description #1", a2: "Answer Choice Description #2", a3: "Answer Choice Description #3"},
        prices: {p1: 300, p2: 500, p3: 1000}
    },
    {
        question: "What type of branding service are you looking for?",
        answers: {a1: "Answer Choice #1", a2: "Answer Choice #2", a3: "Answer Choice #3"},
        descriptions: {a1: "Answer Choice Description #1", a2: "Answer Choice Description #2", a3: "Answer Choice Description #3"},
        prices: {p1: 0, p2: 0, p3: 0}
    },
    {
        question: "What type of branding service are you looking for?",
        answers: {a1: "Answer Choice #1", a2: "Answer Choice #2", a3: "Answer Choice #3"},
        descriptions: {a1: "Answer Choice Description #1", a2: "Answer Choice Description #2", a3: "Answer Choice Description #3"},
        prices: {p1: 0, p2: 0, p3: 0}
    },
    {
        question: "What type of branding service are you looking for?",
        answers: {a1: "Answer Choice #1", a2: "Answer Choice #2", a3: "Answer Choice #3"},
        descriptions: {a1: "Answer Choice Description #1", a2: "Answer Choice Description #2", a3: "Answer Choice Description #3"},
        prices: {p1: 0, p2: 0, p3: 0}
    },
    {
        question: "What type of branding service are you looking for?",
        answers: {a1: "Answer Choice #1", a2: "Answer Choice #2", a3: "Answer Choice #3"},
        descriptions: {a1: "Answer Choice Description #1", a2: "Answer Choice Description #2", a3: "Answer Choice Description #3"},
        prices: {p1: 0, p2: 0, p3: 0}
    }
];

/*************************************/
/*** Begin Estimator Questionnaire ***/
/*************************************/

//Goes forward to the next question.
function nextQuestion(){
    validation = answerValidation();
    if (validation){
        questionNumber++;
        questionElement.className = "container options transitionOut";
        setTimeout(function(){
            questionElement.className = "container options transitionIn";
            questionQuestion.innerHTML = (questionNumber+1)+". "+questions[questionNumber].question;}, 750);
            if (questionNumber>0){
                previousButton.className = "button left active";
                previousButton.disabled = false;
            }
            if (questionNumber==(questions.length-1)){
                nextButton.innerHTML = "Submit ►";
            }
    }
}

//Goes back to the previous question.
function previousQuestion(){
    validation = answerValidation();
    if (validation){
        questionNumber--;
        questionElement.className = "container options transitionOut";
        setTimeout(function(){
            questionElement.className = "container options transitionIn";
            questionQuestion.innerHTML = (questionNumber+1)+". "+questions[questionNumber].question;}, 750);
            if (questionNumber==0){
                previousButton.className = "button left disabled";
                previousButton.disabled = true;
            }
            if (questionNumber<(questions.length-1)){
                nextButton.innerHTML = "Next ►";
            }
    }
}

//Validation
function answerValidation(){
    //Confirms An Answer Has Been Selected
    if(!(optionOne.checked) && !(optionTwo.checked) && !(optionThree.checked) && !(optionFour.checked)){
        validation = false;}
    else if(questionNumber<0 || questionNumber>questions.length){
        validation = false;
        alert("Test2");}
    else{
        validation = true;}
    return validation;
}

//Key Listener
document.onkeydown = checkKey;
function checkKey(e){
    e = e || window.event;
    if (e.keyCode == '37'){previousQuestion();}
    if (e.keyCode == '39'){nextQuestion();}
}