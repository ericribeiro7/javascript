// Seleciona os elementos do DOM
const screen = document.querySelector('.calculator-screen');
const numberButtons = document.querySelectorAll('.calculator-numbers button');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equal-sign');
const allClearButton = document.querySelector('.all-clear');
const decimalButton = document.querySelector('.decimal');

let currentNumber = '';
let previousNumber = '';
let operator = null;

// Atualiza a tela da calculadora
function updateScreen(number) {
    screen.value = number;
}

// Função para adicionar números
function appendNumber(number) {
    if (currentNumber.includes('.') && number === '.') return;
    currentNumber += number;
    updateScreen(currentNumber);
}

// Função para selecionar o operador
function chooseOperator(selectedOperator) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Função para calcular o resultado
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operator = null;
    previousNumber = '';
    updateScreen(currentNumber);
}

// Função para limpar a tela e resetar a calculadora
function clear() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    updateScreen('0');
}

// Função para adicionar o ponto decimal
function appendDecimal() {
    if (currentNumber === '') currentNumber = '0';
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateScreen(currentNumber);
}

// Adiciona os event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.value);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.value);
    });
});

equalsButton.addEventListener('click', () => {
    calculate();
});

allClearButton.addEventListener('click', () => {
    clear();
});

decimalButton.addEventListener('click', () => {
    appendDecimal();
});

// Inicializa a tela da calculadora
updateScreen('0');
