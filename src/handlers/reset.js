export function resetState() {
    const answerButtonsElement = document.getElementById('answer-buttons');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    const hintBox = document.getElementById('hint-box')
    while (hintBox.firstChild) {
        hintBox.removeChild(hintBox.firstChild);
    }

}