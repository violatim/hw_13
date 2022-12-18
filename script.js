// 1
const firstValue = document.getElementById('first_value')
const secondValue = document.getElementById('second_value')
const operator = document.getElementById('operator')
const resultOperation = document.getElementById('res_calc')

function isNumber(x) {
    if (x === '') {
        return false
    }
    const numX = +x
    if (isNaN(numX)) {
        return false
    } else {
        return true
    }
}

function calc() {
    const value1 = firstValue.value
    const value2 = secondValue.value
    const sing = operator.value
    let res = 0
    if (isNumber(value1 || value2)) {
        switch (sing) {
            case ('+'):
                res = +value1 + +value2
                break
            case ('-'):
                res = value1 - value2
                break
            case ('/'):
                res = value1 / value2
                break
            case ('*'):
                res = value1 * value2
                break
        }
        resultOperation.textContent = res;
    } else {
        alert('Nor a number')
    }
}

// 2
const inputNumber = document.getElementById('item_input')
const sumItem = document.getElementById('sum_item')
const arrayResult = document.getElementById('array_result')
const array = []

function addItem() {
    const value = +inputNumber.value
    if (isNumber(value)) {
        array.push(+value)
        sumItem.textContent = +sumItem.textContent + value
        arrayResult.textContent = JSON.stringify(array)
    } else {
        alert('Not a number')
    }
}

// 3
const createNumber = document.getElementById('number_input')
const reverseResult = document.getElementById('reverse_result')

function reverseNumber() {
    const num = createNumber.value
    if(!isNumber(num)){
        alert('Not a number')
        return
    }
    const arrNum = num.split('')
    const revArrNum = arrNum.reverse()
    const res = revArrNum.join('')
    reverseResult.textContent = res
}