function generate() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generate();
    }
}

function generatePin() {
    const pin = generate();
    document.getElementById('pin-display').value = pin;
}

//for typed numbers
document.getElementById('typed-numbers').addEventListener('click', function (event) {
    const newText = event.target.innerText;
    if (isNaN(newText)) {
        if (newText == 'C') {
            document.getElementById('display-typed').value = '';
        }
    }
    else {
        const displayText = document.getElementById('display-typed').value;
        document.getElementById('display-typed').value = displayText + newText;
    }
})

//pin Verify
function verifyPin() {
    const typedPin = document.getElementById('display-typed').value;
    const generatedPin = document.getElementById('pin-display').value;

    if (typedPin == generatedPin) {
        window.location.href = 'shopping.html';
    }
    else {
        document.getElementById('error-message').style.display = 'block';
    }
}