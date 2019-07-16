

var count = 20

var question = {
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
        questionIndex: 0,
        questionNumber: 1,
        question1: "The Saturn V rocket was built by what country?",
        option1: "Russia",
        option2: "China",
        option3: "England,",
        option4: "United States",
        imageoption1: "./assets/images/russia-landmark.jpg",
        imageoption2: "./assets/images/china-landmark.jpg",
        imageoption3: "./assets/images/england-landmark.jpg",
        imageoption4: "./assets/images/us.jpg",
        correctOption: 4
    }]
};

function countdown() {
    $("#countdown").html(count)
    if (count <= 0) {
        alert("time out")
        clearInterval(a)
        console.log(a);
    }
    count--
}

var a = setInterval(countdown, 1000)
console.log(a)

// for(var i=0;i<4;i++){
//     $("#option"+[i+1]).html("test");
// }

var x = 1;
var testArray = [];
var testString = "question.question"

// $("#option1").html(question.question1.option1)
// $(".imageoption1").attr("src",question.question1.imageoption1)
// console.log(Object.values(question.question1));

testArray = Object.values(question.list[0]);
console.log(testArray);
console.log(question.list[0].option1);

$("#option1").html(testArray[3])
$(".imageoption1").attr("src", testArray[7])

$("#option2").html(testArray[4])
$(".imageoption2").attr("src", testArray[8])

$("#option3").html(testArray[5])
$(".imageoption3").attr("src", testArray[9])

$("#option4").html(testArray[6])
$(".imageoption4").attr("src", testArray[10])

$(".question").html(testArray[2]);

$(".card").on("click", function () {
    var userChoice;
    userChoice = $(this).attr("value");

    console.log(userChoice);
    if (parseInt(userChoice) === testArray[11]) {
        alert("correct answer")
        $(this).find("i").css({
            "display": "inline-block"
        });

    }
    else {
        alert("incorrect answer")
        $(this).find("i").removeClass("fas fa-check").addClass("fas fa-times").css({
            "font-size": "2em",
            "color": "red"
        });
        $(".fontawesome-" +[testArray[11]]).css({
            "display": "inline-block"
        });
    }
})
