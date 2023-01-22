const button = document.querySelectorAll('button')
const screen = document.getElementById('input')

let calculation = []
let totalCalculation
let total

button.forEach(button => button.addEventListener('click', () => calculate(button)))

function calculate(button) {
    const value = button.textContent

    if (value == 'C'){
        calculation = []
        screen.textContent = "0"
    }
    else if (value === '='){
        
        total = eval(totalCalculation)
        screen.textContent = total
        console.log('Sum: ' + total)
    }
    else {
        calculation.push(value)
        totalCalculation = calculation.join("")
        screen.textContent = totalCalculation
        console.log(calculation)

    }

    
}


