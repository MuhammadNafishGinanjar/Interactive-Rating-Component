let thankyouPage = document.getElementById("thankyou-page")
let firstPage = document.getElementById("first-page")
let rateDisplay = document.getElementById("rate-display")
let selectedRating = 0

function submit() {
    firstPage.classList.add("d-none")
    thankyouPage.classList.remove("d-none");

    if (selectedRating > 0) {
        rateDisplay.textContent = selectedRating
    } else {
        rateDisplay.textContent = 0
    }
}

function click1() {
    selectedRating = 1
}

function click2() {
    selectedRating = 2
}

function click3() {
    selectedRating = 3
}

function click4() {
    selectedRating = 4
}

function click5() {
    selectedRating = 5
}






