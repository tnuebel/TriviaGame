//initializing declarations when page loads
var seconds =300;
var timer;


// run this code each second and set the variable timer
timer=setInterval(decreaseSeconds, 1000);



// function for decreasing seconds 
function decreaseSeconds(){
 
        //check if the time has become 0
        if(seconds == 0){
            // the time is 0
            $("#timer").html("<h3> Your Time is Up!</h3>");
            seconds = 300;

            //clear interval will reset timer for this function 'timer'
            clearInterval(timer);
            alert("Time's Up!");
            submitResult();

        }else{
            //time has not reached 0
            seconds = seconds -1;
        $("#timer").html("<h3>You Have "+ seconds +" Seconds left.</h3>");
   
        }
}

//results section
// initial declarations:
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//checkResults("q4");
$("#submit").click(function() {
    submitResult();
});

function submitResult(){


    for (var i = 1; i <= 10; i++){
        var questionName = "q" + i;
        var answer = checkResults(questionName);
        console.log(answer);

        if(answer==0){
            //wrong answer
            incorrect++;
        }else if(answer == 1){
            //correct answer
            correct++;
        }else{
            //unanswered
            unanswered++;
        }  

    }

    //display results
    $("#correct").html('Correct Answers: '+correct);
    $("#incorrect").html("Incorrect Answers: "+incorrect);
    $("#unanswered").html("Unanswered: "+unanswered);

    //reset values
    correct= 0;
    incorrect= 0;
    unanswered= 0;
        // stop timer
    clearInterval(timer);
    seconds= 300;
    
    //hide questions
    $(".questions").css("display", "none");
    //hide time indicator
    $("#timer").css("display", "none");
    //hide p tag
    $("#info").css("display", "none");

    //display result
    $(".results").css("display", "block");

}

function checkResults(object){
    var val = $('input[name='+object+']:checked').val();
    return val;
}

$("#restart").click(restart);

function restart() {
    //reset values
    correct= 0;
    incorrect= 0;
    unanswered= 0;
        // stop timer
    clearInterval(timer);
    seconds= 300;



    //show questions
    $(".questions").css("display", "block");
    //show time indicator
    $("#timer").css("display", "block");
    //show p tag
    $("#info").css("display", "block");

    //hide results
    $(".results").css("display", "none");


    for (var i = 1; i <= 10; i++){
        $('input[name=' + "q" + i + ']:checked').prop('checked', false);
    }
  
    timer = setInterval(decreaseSeconds, 1000);

}


