let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}


let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}


let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}



let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestStoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-3")

function increaseGuestScoreTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function increaseGuestScoreThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}