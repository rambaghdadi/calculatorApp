function add(leftNumber, rightNumber) {
	return parseFloat(leftNumber) + parseFloat(rightNumber)
}

function subtract(leftNumber, rightNumber) {
	return parseFloat(leftNumber) - parseFloat(rightNumber)
}

function multiply(leftNumber, rightNumber) {
	return parseFloat(leftNumber) * parseFloat(rightNumber)
}

function divide(leftNumber, rightNumber) {
	return parseFloat(leftNumber) / parseFloat(rightNumber)
}

export function operate(operation, leftNumber, rightNumber) {
	switch (operation) {
		case "÷":
			return divide(leftNumber, rightNumber)
		case "x":
			return multiply(leftNumber, rightNumber)
		case "+":
			return add(leftNumber, rightNumber)
		case  "-":
			return subtract(leftNumber, rightNumber)
        case "%":
            return rightNumber
		default:
			console.error("Unknown operation")
			return ""
	}
}
