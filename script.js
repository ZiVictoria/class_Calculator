let add = document.querySelector("#add");
let subst = document.querySelector("#subst");
let divide = document.querySelector("#divide");
let mult = document.querySelector("#mult");
let result = document.querySelector("#result");

class Calculator {
    constructor(digit_first, digit_second) {
        this.digit_first = digit_first;
        this.digit_second = digit_second;
    }
    static addNumbers(Numbers) {
        return (Numbers.digit_first + Numbers.digit_second)
    }
    static subscractNumbers(Numbers) {
        return (Numbers.digit_first - Numbers.digit_second)
    }
    static divideNumbers(Numbers) {
        return (Numbers.digit_first / Numbers.digit_second)
    }
    static multiplyNumbers(Numbers) {
        return (Numbers.digit_first * Numbers.digit_second)
    }
}

function getNum(operandNumber) {
    let operands = document.querySelector(`#${operandNumber}`).value;
    return Number(operands);
}

function getObj() {
    let calculator = new Calculator(getNum("digit_first"), getNum("digit_second"));
    return calculator;
}

add.addEventListener("click", () => {
    result.innerHTML = Calculator.addNumbers(getObj());
});

subst.addEventListener("click", () => {
    result.innerHTML = Calculator.subscractNumbers(getObj());
});

divide.addEventListener("click", () => {
    result.innerHTML = Calculator.divideNumbers(getObj());
});

mult.addEventListener("click", () => {
    result.innerHTML = Calculator.multiplyNumbers(getObj());
});