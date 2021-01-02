var timerEl = document.getElementById('timer');
var timeLeft = 40;
var score = 0;
var homeBtn = document.getElementById('home-btn');
var highBtn = document.getElementById('high-btn');
var startBtn = document.getElementById('start-quiz');
var openState = document.getElementById('opening-statement');
var openTitle = document.getElementById('title');
var openInfo = document.getElementById('info');
var quizQuest = document.getElementById('quiz-question');
var questTitle = document.getElementById('question');
var answerA = document.getElementById('answerA');
var answerB = document.getElementById('answerB');
var answerC = document.getElementById('answerC');
var answerD = document.getElementById('answerD');
var answerChoice = "";
var correctAnswer = "";
var questionNum = 1;
var resultSection = document.getElementById('the-result');
var result = document.getElementById('result');
var highscore = localStorage.getItem('highscore');

function selectAnswer() {
    answerA.onclick = function() {
        answerChoice = "a";
        console.log("answer choice is " + answerChoice);
        checkAnswer();
    };

    answerB.onclick = function() {
        answerChoice = "b";
        console.log("answer choice is " + answerChoice);
        checkAnswer();
    };

    answerC.onclick = function() {
        answerChoice = "c";
        console.log("answer choice is " + answerChoice);
        checkAnswer();
    };

    answerD.onclick = function() {
        answerChoice = "d";
        console.log("answer choice is " + answerChoice);
        checkAnswer();
    };
}

function checkAnswer() {
    console.log("the correct answer is " + correctAnswer);
    questionNum = questionNum + 1;
    if (answerChoice === correctAnswer) {
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        score = score + 1;
        setTimeout(function(){alert("Correct");}, 1);
        setTimeout(nextQuestion, 2);
        
    } else {
        timeLeft = timeLeft - 5;
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(function(){alert("Incorrect");}, 1);
        setTimeout(nextQuestion, 2);
    }
}

function nextQuestion() {
    if (questionNum === 1) {
        question1();
    } else if (questionNum === 2) {
        question2();
    } else if (questionNum === 3) {
        question3();
    } else if (questionNum === 4) {
        question4();
    } else if (questionNum === 5) {
        question5();
    } else {
        endGame();
    }
}

function question1() {
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the first question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Right';
    answerD.textContent = 'Wrong';
    
    correctAnswer = "c";
    selectAnswer();
}

function question2() {
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the second question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    correctAnswer = "d";
    selectAnswer();
}

function question3() {
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the third question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    correctAnswer = "d";
    selectAnswer();
}

function question4() {
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the fourth question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    correctAnswer = "d";
    selectAnswer();
}

function question5() {
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the fifth question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    correctAnswer = "d";
    selectAnswer();
}

function endGame () {
    timeLeft = 0;
    
}


// Timer that counts down from 30
function countdown() {
    startBtn.style.display = 'none';
    highBtn.style.display = 'none';
    homeBtn.style.display = 'none';
    openState.style.display = 'none';
    quizQuest.style.display = 'block';
    nextQuestion();
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft + ' Seconds Remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = 'Time: ' + timeLeft + ' Second Remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Time Has Expired!';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            resultSection.style.display = 'none';
            homeBtn.style.display = 'block';
            quizQuest.style.display = 'none';
            openState.style.display = 'block';
            openTitle.textContent = 'Thank you for playing!'
            openInfo.textContent = 'Your score was a ' + score + '/5';
            if (score >= highscore) {
                localStorage.setItem('highscore', score);
                var userName = prompt('Enter your initials to save your new highscore');
                localStorage.setItem('name', userName);
            } else {
                openInfo.textContent = 'Your score was a ' + score + '/5. You did not beat the highscore.';
            }
        }
    }, 1000);
}

// highest score button
highBtn.addEventListener("click", function(){
    resultSection.style.display = 'none';
    homeBtn.style.display = 'block';
    quizQuest.style.display = 'none';
    openState.style.display = 'block';
    openTitle.textContent = 'Who Has The Highest Score?'
    if (typeof localStorage.name !== 'undefined') {
        openInfo.textContent = 'The highest score is from ' + localStorage.name + ' with a score of ' + localStorage.highscore;
    } else {
        openInfo.textContent = 'Nobody has taken the quiz yet, be the first and set the bar high!';
    }
});

// home button
homeBtn.addEventListener("click", function(){
    resultSection.style.display = 'none';
    highBtn.style.display = 'block';
    startBtn.style.display = 'block';
    quizQuest.style.display = 'none';
    openState.style.display = 'block';
    openTitle.textContent = "Welcome to the Coding Quiz!";
    openInfo.textContent = "You will have 40 seconds to answer 5 questions. \nFor each incorrect answer you will be deducted 5 seconds from your remaining time. \nClick the Get Started button below to begin the quiz. \nGood Luck!";
    console.log(openInfo.textContent);
})

startBtn.onclick = countdown;

//localStorage.clear();