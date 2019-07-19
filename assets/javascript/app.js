// Note: notAnswered=total question -(correctAnswer+wrongAnswer)

// Global variables
var count = 20
var a
var countquestion = 0
var questionArray = [];
var correctAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;

// Array with question  

var questionObject = {
    list: [{
        questionIndex: 0,
        questionNumber: 1,
        question1: "Which country is not an OPEC member",
        option1: "Russia",
        option2: "Saudi Arabia",
        option3: "Iraq",
        option4: "United Arab Emirates",
        imageoption1: "./assets/images/russia-landmark.jpg",
        imageoption2: "./assets/images/saudiarabia-landmark.jpg",
        imageoption3: "./assets/images/iraq-landmark.jpg",
        imageoption4: "./assets/images/uae-landmark.jpg",
        correctOption: 1

    },
    {
        questionIndex: 1,
        questionNumber: 2,
        question1: "The Saturn V rocket was built by what country?",
        option1: "Russia",
        option2: "China",
        option3: "England",
        option4: "United States",
        imageoption1: "./assets/images/russia-landmark-2.jpg",
        imageoption2: "./assets/images/china-landmark.jpg",
        imageoption3: "./assets/images/england-landmark.jpg",
        imageoption4: "./assets/images/us-landmark.jpg",
        correctOption: 4
    },
    {
        questionIndex: 2,
        questionNumber: 3,
        question1: "The Eiffel Tower is in which country?",
        option1: "Finland",
        option2: "Germany",
        option3: "France",
        option4: "Italy",
        imageoption1: "./assets/images/finland-landmark.jpg",
        imageoption2: "./assets/images/germany-landmark.jpg",
        imageoption3: "./assets/images/france-landmark.jpg",
        imageoption4: "./assets/images/italy-landmark.jpg",
        correctOption: 3
    },
    {
        questionIndex: 3,
        questionNumber: 4,
        question1: "What country has the largest Muslim population?",
        option1: "Indonesia",
        option2: "Nigeria",
        option3: "Iraq",
        option4: "Libya",
        imageoption1: "./assets/images/indonesia-landmark.jpg",
        imageoption2: "./assets/images/nigeria-landmark.jpg",
        imageoption3: "./assets/images/iraq-landmark-2.jpg",
        imageoption4: "./assets/images/libya-landmark.jpg",
        correctOption: 1
    },
    {
        questionIndex: 4,
        questionNumber: 5,
        question1: "What country's flag has a red maple leaf?",
        option1: "Canada",
        option2: "Switzerland",
        option3: "Turkey",
        option4: "Uruguay",
        imageoption1: "./assets/images/canada-landmark.jpg",
        imageoption2: "./assets/images/switzerland-landmark.jpg",
        imageoption3: "./assets/images/turkey-landmark.jpg",
        imageoption4: "./assets/images/uruguay-landmark.jpg",
        correctOption: 1
    },
    {
        questionIndex: 5,
        questionNumber: 6,
        question1: "What is the world's smallest (in sq mi.) country?",
        option1: "Liechtenstein",
        option2: "Vatican",
        option3: "Monaco",
        option4: "South Korea",
        imageoption1: "./assets/images/liechtenstein-landmark.jpg",
        imageoption2: "./assets/images/vatican-landmark.jpg",
        imageoption3: "./assets/images/monaco-landmark.jpg",
        imageoption4: "./assets/images/korea-landmark.jpg",
        correctOption: 2
    }]
};


$(document).ready(function () {

    // list the total number of question on the start page
    $("#totalQuestion").html(questionObject.list.length)

    // when the user clicks the start button
    $(".start").on("click", function () {
        $(".row").removeClass("d-none");
        $(".startscreen").addClass("d-none");

        //question function is called 
        question();

    });

    function question() {

        // adding class to our buttons/cards so that they can be selected
        $(".card").addClass("select")

        // converting object into an array for easier data manipulation
        console.log("The count question index is: " + countquestion);
        questionArray = Object.values(questionObject.list[countquestion])

        // the function countdown is called every 1s, this is a countdown timer
        a = setInterval(countdown, 1000)
        console.log("The interval ID is: " + a)

        $("#questionNumber").html("Question " + questionArray[1] + " of " + questionObject.list.length)

        // using switch to populate the form

        switch (questionArray[0]) {
            case 0:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 1:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 2:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 3:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 4:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 5:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);
                break;
            case 6:
                $("#option1").html(questionArray[3])
                $(".imageoption1").attr("src", questionArray[7])

                $("#option2").html(questionArray[4])
                $(".imageoption2").attr("src", questionArray[8])

                $("#option3").html(questionArray[5])
                $(".imageoption3").attr("src", questionArray[9])

                $("#option4").html(questionArray[6])
                $(".imageoption4").attr("src", questionArray[10])

                $(".questionDisplay").html(questionArray[2]);

        }
        countquestion++
    };

    function countdown() {

        // countdown timer
        $("#countdown").html(count)
        if (count <= 0) {
            // Display answer when time runs out
            $(".fontawesome-" + [questionArray[11]]).css({
                "display": "inline-block"
            });
            clearInterval(a)
            console.log(a);
           
            setTimeout(transitionQuestion, 3000)
        }
        count--
    };


    $("body").on("click", ".select", function () {

        clearInterval(a);
        var userChoice;
        userChoice = $(this).attr("value");
        console.log("user picked option: " + userChoice);

        // removing class so as to avoid the user from pressing the option again
        $(".card").removeClass("select")

        // comparing the user choice to the option selectied
        if (parseInt(userChoice) === questionArray[11]) {
            
            $(this).find("i").css({
                "display": "inline-block"
            });
            correctAnswer++
            console.log("Number of correct answer: " + correctAnswer)
        } else {
           
            $(this).find("i").removeClass("fas fa-check").addClass("fas fa-times").css({
                "font-size": "2em",
                "color": "red",
                "display": "inline-block"
            });
            $(".fontawesome-" + [questionArray[11]]).css({
                "display": "inline-block"
            });
            wrongAnswer++
            console.log("Number of wrong answer: " + wrongAnswer)
        }

        // display spinner after 3 seconds
        setTimeout(transitionQuestion, 3000)

    })

    // This function is a set of routine to display spinners and/or hide rows when tranistioning from one question to another
    function transitionQuestion() {

        $(".card").find("i").removeClass("fas fa-check").addClass("fas fa-spinner fa-spin").css({
            "font-size": "2em",
            "display": "inline-block"
        })
        $(".card").find("i").removeClass("fas fa-times").addClass("fas fa-spinner fa-spin").css({
            "font-size": "2em",
            "display": "inline-block",
            "color": "white"
        })
        $(".questionDisplay").html("")
        $("#questionSpinner").removeClass("d-none")
        $(".card-img-top").attr("src", "./assets/images/default.png")
        $(".card-title").addClass("d-none")

        if (countquestion > 5) {
            clearInterval(a);
            showResult();
            return
        }

        setTimeout(transitionReset, 3000)

    }

    // This function is a set of routine so as to hide spinners and get the form ready to display next question
    function transitionReset() {
        
        $(".card-title").removeClass("d-none")
        $("#questionSpinner").addClass("d-none");
        $(".card").find("i").removeClass("fas fa-spinner fa-spin").addClass("fas fa-check").css({
            "display": "none",
            "color": "lawngreen"
        })

        // restart counter and call the question function
        count = 20
        question()
    };

    // function for routines to display the result screen
    function showResult() {

        $(".row").addClass("d-none");
        $(".result").removeClass("d-none");
        $("#correctAnswer").html(" " + correctAnswer);
        $("#wrongAnswer").html(" " + wrongAnswer);
        $("#notAnswered").html(" " + (questionObject.list.length - (correctAnswer + wrongAnswer)))
        return
    }

    // reset button
    $(".restart").on("click", function () {
        masterReset()
    })

    // hard reset when the reset button is pressed
    function masterReset() {
        count = 20
        countquestion = 0
        correctAnswer = 0
        wrongAnswer = 0
        notAnswered = 0
        questionArray = []
        $(".result").addClass("d-none")
        $(".row").removeClass("d-none")
        $(".card-title").removeClass("d-none")
        $("#questionSpinner").addClass("d-none");
        $(".card").find("i").removeClass("fas fa-spinner fa-spin").addClass("fas fa-check").css({
            "display": "none",
            "color": "lawngreen"
        })
        question();
    }

});


