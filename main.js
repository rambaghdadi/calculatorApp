import { operate } from "./logic.js"

// display selection
const upperDisplay = document.querySelector(".upper")
const mainDisplay = document.querySelector(".main")

// numbers selection
const numBtns = document.querySelectorAll(".num")

//operators selection
const allOps = document.querySelectorAll(".ops")

//equal selection
const equalBtn = document.querySelector(".equal")

//clear buttons selection
const clearBtn = document.querySelector(".c-funcs")
const clearAllBtn = document.querySelector(".ac-funcs")

//percentage button
const percentageBtn = document.querySelector(".percentage")

///////////////////// ADD ALL CODE UNDER HERE///////////////////////////
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//starting conditions
let current = ""
let upper = ""
let operation = ""

// clear all button functionality
clearAllBtn.addEventListener("click", () => {
	current = ""
	upper = ""
	clearColors()
	updateMainDisplay()
})

// backspace button functionality
clearBtn.addEventListener("click", () => {
	current = current.slice(0, -1)
	updateMainDisplay()
})

// numbers input functionality
for (let i of numBtns) {
	i.addEventListener("click", () => {
		if (current && current.includes(".") && i.textContent === ".") return
		if (mainDisplay.textContent.includes("%")) return

		clearColors()
		if (operation === "=") {
			current = i.textContent 
			operation = ""
		} else {
			current += i.textContent
		}

		updateMainDisplay()
	})
}

// operations
for (let ops of allOps) {
	ops.addEventListener("click", () => {
		if (!current && !upper) return

		operation = ops.innerHTML
		clearColors()
		ops.classList.add("selected-func")

		if (upper && current && operate !== "=") {
			upper = operate(operation, upper, current)
		} else if (current) {
			upper = current
		}

		current = ""
		updateMainDisplay()
	})
}

percentageBtn.addEventListener("click", () => {
	if (!current) return
	if (mainDisplay.textContent.includes("%")) return

	operation = "%"
	current = "" + parseFloat(current) / 100
	mainDisplay.textContent = `${(current * 100).toFixed(0)}%`
})

equalBtn.addEventListener("click", () => {
	if (!current) return

	if (current.slice(0, 1) === ".") {
		current = "0" + current
		updateMainDisplay()
	}

	if (!operation) return

	current = operate(operation, upper, current)
	upper = ""
	operation = "="
	clearColors()
	updateMainDisplay()
})

// update display
function updateMainDisplay() {
	mainDisplay.textContent = current
	upperDisplay.textContent = upper
}

// remove colors
function clearColors() {
	allOps.forEach((x) => {
		x.classList.remove("selected-func")
	})
}

// BUGS

// 5-5-5-5-5-5
