var timerEl = document.getElementById('timer');
var timeLeft = 20;
var tempTime = 0;
var score = 0;
var startBtn = document.getElementById('start-quiz');
var openState = document.getElementById('opening-statement');
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

}

function secondQuestion() {
    resetAnswers();
    timeLeft = tempTime;
    resultSection.style.display = 'none';
    questTitle.textContent = 'This is the second question';
    answerA.textContent = 'Wrong';
    answerB.textContent = 'Wrong';
    answerC.textContent = 'Wrong';
    answerD.textContent = 'Right';
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