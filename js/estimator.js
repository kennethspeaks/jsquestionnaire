/*  
Title:      BKreative Website Estimator
Author:     Ken Elliott (@kennethspeaks)
For:        BKreative Media Solutions
Website:    https://www.bkreative.net
Version:    1.0.0
*/

//Estimate Variables
var price;
var question;

//Question Element Container
var questionElement = document.getElementById('options');
var optionOne = document.getElementById('first_option');
var optionTwo = document.getElementById('second_option');
var optionThree = document.getElementById('third_option');
var optionFour = document.getElementById('fourth_option');


/*************************************/
/*** Begin Estimator Questionnaire ***/
/*************************************/

//Estimate Animations
function nextQuestion(){
    var validation = answerValidation();
    if (validation){
        questionElement.style.overflow = "hidden";
        questionElement.style.opacity = 1.0;
        questionElement.style.top = "25%";
        setInterval(questionAnimationUp, 35);
        //setInterval(questionAnimationDown, 35);
    }
}

function previousQuestion(){
    questionElement.clientHeight == "0";
}

function questionAnimationUp(){
    //Create Variables for Height, Opacity, & Top
    var questionOpacity = questionElement.style.opacity;
    var questionTop = questionElement.style.top;
    
    //Remove the "%" From The Variable And Convert It Into A Number
    questionTop = questionTop.substring(0, questionTop.length - 1);
    
    if(questionOpacity>0){
        questionOpacity = questionOpacity - .05;
        questionTop = questionTop - 0.5; 
        questionElement.style.opacity = questionOpacity;
        questionElement.style.top = questionTop + "%";
    }
    else{
        clearInterval()
    }
}

function questionAnimationDown(){
    var questionHeight =  questionElement.clientHeight;
    var questionOpacity = questionElement.style.opacity;
    if((questionHeight<379)&&(questionOpacity<1)){
        questionHeight = (questionHeight + 1) * 2;
        questionOpacity = questionOpacity + .05;
        questionElement.style.height = questionHeight + "px";
        questionElement.style.opacity = questionOpacity;
        alert("Down - opacity: " + questionOpacity + " || height: " + questionHeight);
    }
    else{
        clearInterval()
    }
}

//Validation
function answerValidation(){
    //Confirms An Answer Has Been Selected
    let validation = (optionOne.checked || optionTwo.checked || optionThree.checked || optionFour.checked) ? true : false;
    return validation;
}

//Key Listener
document.onkeydown = checkKey;
function checkKey(e){
    e = e || window.event;
    if (e.keyCode == '37'){previousQuestion();}
    if (e.keyCode == '39'){nextQuestion();}
}