function checkAnswer() {
  // 1. Correct Answer
  const correctAnswer="4";

  // 2. User’s Answer
  const selectedRadio=document.querySelector('input[name="quiz"]:checked');
  let userAnswer=null;

  if (selectedRadio) {
    userAnswer=selectedRadio.value;
  }

  // 3. Compare Answers and Update Feedback
  const feedback=document.getElementById("feedback");

  if (userAnswer===correctAnswer) {
    feedback.textContent="Correct! Well done.";
  }

  else {
    feedback.textContent="That's incorrect. Try again!";
  }
}

// 4. Add Event Listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);