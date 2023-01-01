let screen = document.getElementById('input');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = screen.value.slice(0, screen.value.length - 1);
            screen.value = screenValue
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value
        }
        else if (buttonText == 'Mod') {
            buttonText = '%';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

window.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        screenValue = screen.value.slice(0, screen.value.length - 1);
        screen.value = screenValue
    }
    else if (e.key == 'Enter') {
        screen.value = eval(screenValue);
        screenValue = screen.value;
    }
    else if (e.key == '+') {
        screenValue = screen.value + "+";
        screen.value = screenValue;
    } else if (e.key == '-') {
        screenValue = screen.value + "-";
        screen.value = screenValue;
    } else if (e.key == '*') {
        screenValue = screen.value + "*";
        screen.value = screenValue;
    } else if (e.key == '%') {
        screenValue = screen.value + "%";
        screen.value = screenValue;
    } else if (e.key == '/') {
        screenValue = screen.value + "/";
        screen.value = screenValue;
    }
    else if (e.key == '1') {
        screenValue = screen.value + "1";
        screen.value = screenValue;
    } else if (e.key == '2') {
        screenValue = screen.value + "2";
        screen.value = screenValue;
    } else if (e.key == '3') {
        screenValue = screen.value + "3";
        screen.value = screenValue;
    } else if (e.key == '4') {
        screenValue = screen.value + "4";
        screen.value = screenValue;
    } else if (e.key == '5') {
        screenValue = screen.value + "5";
        screen.value = screenValue;
    } else if (e.key == '6') {
        screenValue = screen.value + "6";
        screen.value = screenValue;
    } else if (e.key == '7') {
        screenValue = screen.value + "7";
        screen.value = screenValue;
    } else if (e.key == '8') {
        screenValue = screen.value + "8";
        screen.value = screenValue;
    } else if (e.key == '9') {
        screenValue = screen.value + "9";
        screen.value = screenValue;
    }
    else if (e.key == '0') {
        screenValue = screen.value + "0";
        screen.value = screenValue;
    }
})
