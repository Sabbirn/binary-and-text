function binaryToText() {
    const binaryInput = document.getElementById('binaryInput').value;
    const binaryArray = binaryInput.split(' ');

    let textOutput = '';
    for (let i = 0; i < binaryArray.length; i++) {
        textOutput += String.fromCharCode(parseInt(binaryArray[i], 2));
    }

    document.getElementById('textInput').value = textOutput;
}

function textToBinary() {
    const textInput = document.getElementById('textInput2').value;

    let binaryOutput = '';
    for (let i = 0; i < textInput.length; i++) {
        binaryOutput += textInput[i].charCodeAt(0).toString(2) + ' ';
    }

    document.getElementById('binaryOutput').value = binaryOutput.trim();
}
