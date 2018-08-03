import C from './constants'
import { add, subtract, divide, multiply } from "./helpers"

export const addHistory = (value) => ({
    type: C.ADD_HISTORY,
    payload: value
})

export const clearHistory = () => ({
    type: C.RESET_HISTORY
})

export const calculateHistory = (total) => ({
    type: C.CALCULATE_HISTORY,
    payload: total
})

export const addCurrent = value => {
    return {
        type: C.ADD_CURRENT,
        payload: value
    }
}

export const resetCurrent = () => ({
    type: C.RESET_CURRENT
})

export const addPrevious = previous => ({
    type: C.ADD_PREVIOUS,
    payload: previous
})

export const addCurrentSign = sign => ({
    type: C.ADD_CURRENT_SIGN,
    payload: sign
})

export const evaluated = evaluated => ({
    type: C.EVALUATED,
    payload: evaluated
})

export const handleSelection = (value, previous) => dispatch => {
    let update = value
    const isOperator = /[x/+-]/.test(value)

    if (isOperator) {
        update = " " + value + " "
    } 

    dispatch(addHistory(update))
    dispatch(addCurrent(update))
    dispatch(addPrevious(previous))
}

export const handleClear = () => dispatch => {
    dispatch(clearHistory())
    dispatch(resetCurrent())
    dispatch(evaluated(false))
}

export const handleEvaluation = (history) => dispatch => {
    if (history.length === 0) dispatch(evaluated(false))

    // set variables to define operator action
    let addition, subtraction, multiplication, division;
    addition = subtraction = multiplication = division =  false;
    
    // use reduce to total all values
    let total = [...history].reduce(function(accumulator, currentValue, currentIndex) {
        const isOperator = /[x/+-]/.test(currentValue)
        debugger;
        if (isOperator) {
            switch(currentValue) {
                case " - ":
                    subtraction = true
                    addition = division = multiplication = false
                    break;
                case " / ":
                    division = true
                    addition = subtraction = multiplication = false
                    break;
                case " x ":
                    multiplication = true
                    addition = subtraction = division = false
                    break;
                default:
                    addition = true
                    subtraction = division = multiplication = false
                    break;
            }

            // return accumulator if operator
            return accumulator
        }

        if (currentIndex === 0) return parseInt(currentValue)

        // else return function
        if (addition) return add(accumulator, currentValue)
        if (subtraction) return subtract(accumulator, currentValue)
        if (division) return divide(accumulator, currentValue)
        if (multiplication) return multiply(accumulator, currentValue)
    }, 0);

    dispatch(calculateHistory( [" = ", total.toString()] ))
    dispatch(resetCurrent(total))
    dispatch(evaluated(true))
}