const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === 'error') {
        display.value = '';
    }
    display.value += input;
}

function clearDisplay() {
   display.value = '';
}

function calculateResult() {
    try{
     display.value = eval(display.value);
    }
    catch{
        display.value = 'error';
    }   
}