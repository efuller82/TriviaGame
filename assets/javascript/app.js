//setting up timer
var number = 120;
var intervalID;

//sets an interval that runs the decrement function once a second
function run() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

//stop function
function stop() {
    clearInterval(intervalID);
    $(".quiz").hide();
    $("#results_page").show();

}

//decrement function
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    //once number hits zero
    if (number === 0) {
        stop();
        //do other stuff here
        getCorrectAnswers();
        postResults();
        if (correctAnswersArray.length < 7) {
            $("audio#laughter")[0].play();
        }
    }
}

//starts quiz 
$(".start_quiz").click(function () {
    $(".opening_page").hide();
    $(".quiz").toggle();
    run();
});

//attempt to calculate results
var correctAnswersArray = [];
var incorrectAnswersArray = [];
var unansweredQuestions;
function getCorrectAnswers() {
    $("form input[type='radio']:checked").each(function () {
        var questionAnswer = $(this).val();
        if (questionAnswer === "correct") {
            correctAnswersArray.push(questionAnswer);
        } else if (questionAnswer !== "correct") {
            incorrectAnswersArray.push(questionAnswer);
        }
        unansweredQuestions = 10 - (correctAnswersArray.length + incorrectAnswersArray.length);
    })
    console.log(correctAnswersArray);
    console.log(incorrectAnswersArray);
}




//function to publish results
function postResults() {
    $("#correct_answers").text("Correct answers: " + correctAnswersArray.length);
    $("#incorrect_answers").text("Incorrect answers: " + incorrectAnswersArray.length);
    $("#unanswered_questions").text("Unanswered questions: " + unansweredQuestions);
}



//goes to results page when quiz is finished
$(".submit_answers").click(function () {
    $(".quiz").toggle();
    getCorrectAnswers();
    postResults();
    $("#results_page").toggle();
    if (correctAnswersArray.length < 7) {
        $("audio#laughter")[0].play();
    }
    clearInterval(intervalID);
});
