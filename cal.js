const res = document.getElementById("res");

let input1 = '';    // to store current input for ta1
let input2 = '';    // to store current input for ta2
let currentInput = 1; // to track which input is currently active

function setCurrentInput(inputNumber) {
    currentInput = inputNumber;
}

function enter(key) {
    let activeElement = document.activeElement;
    if (key === '.') {
        if (currentInput === 1) {
            if (input1.indexOf('.') === -1) {
                input1 += key;
            }
        } else if (currentInput === 2) {
            if (input2.indexOf('.') === -1) {
                input2 += key;
            }
        }
    } else {
        if (currentInput === 1) {
            input1 += key;
        } else if (currentInput === 2) {
            input2 += key;
        }
    }
    update();
    activeElement.focus(); // Refocus the input field
}

function back() {
    if (currentInput === 1) {
        input1 = input1.slice(0, -1);
    } else if (currentInput === 2) {
        input2 = input2.slice(0, -1);
    }
    update();
    document.getElementById(`ta${currentInput}`).focus();
}

function update() {
    if (currentInput === 1) {
        document.getElementById("ta1").value = input1;
    } else if (currentInput === 2) {
        document.getElementById("ta2").value = input2;
    }
}


function negate() {
    const act = document.activeElement;
    if (currentInput === 1) {
        const fin = document.getElementById("ta1").value;
        document.getElementById("ta1").value = -fin;
    }
    else if (currentInput === 2) {
        const fin = document.getElementById("ta2").value;
        document.getElementById("ta2").value = -fin;
    }
}

function clears() {
    input1 = '';
    input2 = '';
    currentInput = 1;

    document.getElementById("ta1").value = '';
    document.getElementById("ta2").value = '';

    res.innerHTML = '';
}

function getValues() {
    const num1 = document.getElementById("ta1").value;
    const num2 = document.getElementById("ta2").value;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    return { n1, n2 };
}

let addition = document.getElementById("a");
let subtraction = document.getElementById("s");
let multiplication = document.getElementById("m");
let division = document.getElementById("d");

addition.addEventListener("click", () => {
    let { n1, n2 } = getValues();
    if (isNaN(n1) || isNaN(n2)) {
        res.value = "Enter valid input";
    }
    else {
        let ans = n1 + n2;
        res.value = ans;
    }
})

subtraction.addEventListener("click", () => {
    let { n1, n2 } = getValues();
    if (isNaN(n1) || isNaN(n2)) {
        res.value = "Enter valid input";
    }
    else {
        let ans = n1 - n2;
        res.value = ans;
    }
})

multiplication.addEventListener("click", () => {
    let { n1, n2 } = getValues();
    if (isNaN(n1) || isNaN(n2)) {
        res.value = "Enter valid input";
    }
    else {
        let ans = n1 * n2;
        res.value = ans;
    }
})

division.addEventListener("click", () => {
    let { n1, n2 } = getValues();
    if (isNaN(n1) || isNaN(n2)) {
        res.value = "Enter valid input";
    }
    else if (n2 === 0) {
        res.value = "Undefined";
    }
    else {
        let ans = n1 / n2;
        res.value = ans;
    }
})


