/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator {
    constructor(){
        this._history = [];
    }
    
    history(value){
        this._history.push(value);
    }
    
    getHistory(){
        return this._history;
    }
    
    equals(value){
        const result = eval(value);
        this.history(result);
        return result;
    }
    
    clear(){
        this._history = [];
    }
}

const CalculatorInstance = new Calculator();
const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

/**
 * This function below write the value of the pressed key on the screen
 * The += is the equivalent of:
 * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
 *
 **/
function print(val) {
  calculatorScreen.innerHTML += val;
}

//this code listen to every key on the calculator and add the value on the screen
document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText !== "=") {
    key.addEventListener("click", (e) => print(e.target.innerText));
  }
});

document.querySelectorAll("#calculator span").forEach((key) => {
  if (key.innerText === "=") {
    key.addEventListener("click", (e) => {
        calculatorScreen.innerHTML = CalculatorInstance.equals(calculatorScreen.innerHTML);
        console.log(CalculatorInstance.getHistory());
    });
  }
});

document
  .querySelector("#calculator .clear")
  .addEventListener("click", () => {
      calculatorScreen.innerHTML = "";
      CalculatorInstance.clear();
    });

// Implement here the event when the = key is pressed
