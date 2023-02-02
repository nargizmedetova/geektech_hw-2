let score = document.querySelector('.score');

let Counter = 0

function plusButton() {
    updateScore(++Counter)
}

function minusButton() {
    updateScore(--Counter)
}

function zeroButton() {
    updateScore(Counter = 0)

}

function updateScore(val) {
    score.innerHTML = val
    if (Counter > 0) {
        score.style.color = "green"
    } else if (Counter === 0) {
        score.style.color = "grey"
    } else if (Counter < 0) {
        score.style.color = "red"
    }
}