/*  
Title:      BKreative Website Estimator
Author:     Ken Elliott (@kennethspeaks)
For:        BKreative Media Solutions
Website:    https://www.bkreative.net
Version:    1.0.0
*/

//Estimate Variables
var price = 0;

//Question Element Container
var questionElement = document.getElementById('options');

//Begin Estimator Questionnaire

//Estimate Animations
function nextQuestion(){
    questionElement.style.overflow = "hidden";
    questionElement.style.opacity = 1.0;
    setInterval(questionAnimationUp, 35);
    //setInterval(questionAnimationDown, 35);
}

function previousQuestion(){
    questionElement.clientHeight == "0";
}

function questionAnimationUp(){
    var questionHeight =  questionElement.clientHeight;
    var questionOpacity = questionElement.style.opacity;
    if((questionHeight>0)&&(questionOpacity>0)){
        questionHeight = questionHeight / 2;
        questionOpacity = questionOpacity - .05;
        questionElement.style.height = questionHeight + "px";
        questionElement.style.opacity = questionOpacity;
        //alert("Up - opacity: " + questionOpacity + " || height: " + questionHeight);
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