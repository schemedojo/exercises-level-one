"use strict"

const textElement = document.getElementById("text")
const appleButton = document.getElementById("apple")
const bananaButton = document.getElementById("banana")
const orangeButton = document.getElementById("orange")
const resetButton = document.getElementById("RESET")


function appleClick() {
  textElement.innerHTML = "APPLE"
}

function bananaClick() {
  textElement.innerHTML = "BANANA"
}

function orangeClick() {
  textElement.innerHTML = "ORANGE"
}

function resetClick() {
  textElement.innerHTML = "-"
}

appleButton.addEventListener("click", appleClick)
bananaButton.addEventListener("click", bananaClick)
orangeButton.addEventListener("click", orangeClick)
resetButton.addEventListener("click", resetClick)
