function start_timer(){};

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
    $(".quiz").toggle();
    $("#results_page").toggle();

}

//decrement function
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    //once number hits zero
    if (number === 0) {
        stop();
        //do other stuff here
    }
}

//starts quiz 
$(".start_quiz").click(function(){
    $(".opening_page").hide();
    $(".quiz").toggle();
    run();
});


//goes to results page when quiz is finished
$(".submit_answers").click(function() {
    $(".quiz").toggle();
    $("#results_page").toggle();
});














/* variables for later use when I figure this out
var quizQuestions = $(".quiz");
var quizAnswers = $(".quiz_answers");
*/
/* will have to figure this out later 
function beginQuiz(){
    for (var i = 0; i < myQuotes.length; i++) {
        var newQuestionDiv = $("<div class = question>" + myQuotes[i].quote + "</div>");
        quizQuestions.append(newQuestionDiv);
            for (var j = 0; j < myQuotes[i].answers.length; j++) {
                var newAnswersDiv = $("<div class = answers>" + myQuotes[i].answers[j] + "</div>");
                quizQuestions.append(newAnswersDiv);
            }
    }
};
*/
/* May have to wait til later to figure out how to use this.
var myQuotes = [
    {
        quote: '"I wondered why the frisbee was getting bigger, and then it hit me."',
        answers: [
             "Paul Reiser",
             "Demetri Martin",
             "Mitch Hedberg",
             "Daniel Tosh"
],
        correctAnswer: "Mitch Hedberg" 
    },
    
    {
        quote: '"...when we came to America, it was so nice. It was just Indians. And they weren’t even Indians. We called them that by accident. And we still call them that!"',
        answers: [
             "Louis C.K.",
             "Mike Birbiglia",
             "Aziz Ansari",
             "John Mulaney"
        ],
        correctAnswer: "Louis C.K."
    },

    {
        quote: '"I think the most horrible name for a crime has to be manslaughter...I slaughtered a man! Just like a pig! Put him on a spit and put an apple in his mouth!"',
        answers: [
             "Lewis Black",
             "Patton Oswalt",
             "Steven Wright",
             "Brian Regan"
        ],
        correctAnswer: "Brian Regan"
    },

    {
        quote: '"I busted a mirror and got seven years of bad luck, but my lawyer thinks he can get me five."',
        answers: [
             "Bill Burr",
             "Robin Williams",
             "Steven Wright",
             "Doug Stanhope"
        ],
        correctAnswer: "Steven Wright"
    },

    {
        quote: '"...if a bullet cost five thousand dollars, there would be no more innocent bystanders"',
        answers: [
             "Richard Pryor",
             "Mark Maron",
             "Crhis Rock",
             "Ralphy May"
        ],
        correctAnswer: "Chris Rock"
    },

    {
        quote: '"I\'d rather send out a mass email than hang posters all over the place."',
        answers: [
             "Norm MacDonald",
             "Todd Barry",
             "Pete Holmes",
             "Adam Sandler"
        ],
        correctAnswer: "Todd Barry"
    },

    {
        quote: '"My ex-girlfriend had a really weird fetish. She used to like dress up as herself and then act like a fuckin bitch all the time."',
        answers: [
             "Brian Posehn",
             "Nick Swardson",
             "Bo Burnham",
             "Christopher Titus"
        ],
        correctAnswer: "Bo Burnham"
    },
    {
       quote: '"I donated blood today. That\'s what I call getting an AIDS test."',
       answers: [
            "Sarah Silverman",
            "Tig Notaro",
            "Chelsea Handler",
            "Amy Schumer"
       ],
       correctAnswer: "Amy Schumer"
    },

    {
        quote: '"I like burritos more than Jesus because steak burritos are delicious and they are real."',
        answers: [
             "Hannibal Buress",
             "Jerry Seinfeld",
             "Dave Chappelle",
             "Jim Carrey"
        ],
        correctAnswer: "Hannibal Buress",
    },

    {
        quote: '"The robe is a lazy man\'s tuxedo."',
        answers: [
             "David Letterman",
             "Dane Cook",
             "Jim Gaffigan",
             "Bill Cosby"
        ],
        correctAnswer: "c",
    }
];
*/