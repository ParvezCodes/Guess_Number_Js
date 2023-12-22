const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 7;

checkButton.addEventListener("click", () => {
  chance--;
  let inputValue = input.value;
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = [
      `congrats number is ${inputValue}`,
      true,
    ];
    [checkButton.textContent, guess.style.color] = ["Replay", "green"];
  } else if (inputValue > randomNum && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is high",
      chance,
    ];
    guess.style.color = "#fff";
  } else if (inputValue < randomNum && inputValue > 0) {
    // Update the guessed number text and remaining chances
    [guess.textContent, remainChances.textContent] = [
      "Your guess is low",
      chance,
    ];
    guess.style.color = "#fff";
  } else {
    [guess.textContent, remainChances.textContent] = [
      "Your number is invalid",
      chance,
    ];
    guess.style.color = "#DE0611";
  }
  // Check if the chance is zero
  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = [
      "Replay",
      true,
      "",
    ];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
  }
  if (chance < 0) {
    window.location.reload();
  }
});
