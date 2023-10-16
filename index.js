
let input = document.getElementById("input");
let expression = '';
let result = '0';

function addToInput(event , operator) {
    if (operator) {
        if (expression === '' || /[-+x÷]$/.test(expression)) {
        // Don't add the operator
        } else {
            expression += operator;
        }
    } else {
        expression += event.target.textContent;
    }
    input.textContent = expression;
}
function clearInput() {
    expression = '';
    input.textContent = '';
    result = '0';
}

function calculate() {
    expression = expression.replace(/x/g, '*');
    expression = expression.replace(/÷/g, '/');
     try {
        result =eval(expression);
        input.textContent = result;
        expression = result;
        } catch (error) {
            input.textContent = 'Error';
        }
}

