let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function onRestartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    gameResultElement.textContent = "";
    userInputElement.textContent = "";

}

function onCheckButton() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);

    let sumTwoIntegers = firstRandomInteger + secondRandomInteger;
    let userSum = parseInt(userInputElement.value);
    if (userSum === sumTwoIntegers) {
        gameResultElement.textContent = "Congratulations you got it right";
        gameResultElement.style.backgroundColor = "green";
    } else {
        gameResultElement.textContent = "Please try agian";
        gameResultElement.style.backgroundColor = "red";
    }




}