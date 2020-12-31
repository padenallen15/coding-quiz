var timerEl = document.getElementById('timer');
var timeLeft = 20;
var tempTime = 0;
var score = 0;
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
var resultSection = document.getElementById('the-result');
var result = document.getElementById('result');

function resetAnswers() {
    answerA.style.color = 'black';
    answerB.style.color = 'black';
    answerC.style.color = 'black';
    answerD.style.color = 'black';
}

function firstQuestion() {
    questTitle.textContent = 'This is the first question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Right';
    answerD.textContent = 'Wrong';

    answerA.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerA.style.color = 'red';
        answerC.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(secondQuestion, 3000);
    });

    answerB.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerB.style.color = 'red';
        answerC.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(secondQuestion, 3000);
    });

    answerC.addEventListener("click", function() {
        tempTime = timeLeft;
        answerC.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        setTimeout(secondQuestion, 3000);
    });

    answerD.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerD.style.color = 'red';
        answerC.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(secondQuestion, 3000);
    });
}

function secondQuestion() {
    resetAnswers();
    resultSection.style.display = 'none';
    timeLeft = tempTime;
    questTitle.textContent = 'This is the second question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    answerA.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerA.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(thirdQuestion, 3000);
    });

    answerB.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerB.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(thirdQuestion, 3000);
    });

    answerC.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerC.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(thirdQuestion, 3000);
    });

    answerD.addEventListener("click", function() {
        tempTime = timeLeft;
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        setTimeout(thirdQuestion, 3000);
    });
}

function thirdQuestion() {
    resetAnswers();
    resultSection.style.display = 'none';
    timeLeft = tempTime;
    questTitle.textContent = 'This is the third question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    answerA.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerA.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fourthQuestion, 3000);
    });

    answerB.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerB.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fourthQuestion, 3000);
    });

    answerC.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerC.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fourthQuestion, 3000);
    });

    answerD.addEventListener("click", function() {
        tempTime = timeLeft;
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        setTimeout(fourthQuestion, 3000);
    });
}

function fourthQuestion() {
    resetAnswers();
    resultSection.style.display = 'none';
    timeLeft = tempTime;
    questTitle.textContent = 'This is the fourth question';
    answerA.textContent = 'Right';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Wrong';

    answerA.addEventListener("click", function() {
        tempTime = timeLeft;
        answerA.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        setTimeout(fifthQuestion, 3000);
    });

    answerB.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerB.style.color = 'red';
        answerA.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fifthQuestion, 3000);
    });

    answerC.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerC.style.color = 'red';
        answerA.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fifthQuestion, 3000);
    });

    answerD.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerD.style.color = 'red';
        answerA.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(fifthQuestion, 3000);
    });
}

function fifthQuestion() {
    resetAnswers();
    resultSection.style.display = 'none';
    timeLeft = tempTime;
    questTitle.textContent = 'This is the fifth question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';

    answerA.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerA.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(endGame, 3000);
    });

    answerB.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerB.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(endGame, 3000);
    });

    answerC.addEventListener("click", function() {
        tempTime = timeLeft - 5;
        answerC.style.color = 'red';
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'red';
        result.textContent = 'Wrong Answer, Time -5 Seconds!';
        setTimeout(endGame, 3000);
    });

    answerD.addEventListener("click", function() {
        tempTime = timeLeft;
        answerD.style.color = 'green';
        resultSection.style.display = 'block';
        resultSection.style.borderColor = 'green';
        result.textContent = 'Correct Answer!';
        setTimeout(endGame, 3000);
    });
}

function endGame () {
    resultSection.style.display = 'none';
    quizQuest.style.display = 'none';
    openState.style.display = 'block';
    openTitle.textContent = 'Thank you for playing!'
    openInfo.textContent = 'Your score was a ' + score + '/5';
}


// Timer that counts down from 60
function countdown() {
    startBtn.style.display = 'none';
    openState.style.display = 'none';
    quizQuest.style.display = 'block';
    firstQuestion();
  
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
            // Call the `displayMessage()` function
            //displayMessage();
        }
    }, 1000);
}

startBtn.onclick = countdown;