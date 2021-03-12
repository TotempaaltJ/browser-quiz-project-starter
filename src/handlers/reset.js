export function resetState() {
    const answerButtonsElement = document.getElementById('answer-buttons');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    const hintBox = document.getElementById('hintBox')
    while (hintBox.firstChild) {
        hintBox.removeChild(hintBox.firstChild);
    }

}