import React from 'react'
import { checkForSubsequentZeros, getLastIntegerFromHistory } from '../../helpers'
// import '../../stylesheets/Input.scss'

const CLASSES = [
    'column',
    'has-text-centered',
    'has-text-white',
    'is-size-5'
]

const DECIMAL = "."

const Input = ({id, onSelection, history, evaluated, value}) => {
    const _history = history

    const handleClick = e => {
        e.preventDefault()

        const value = e.target.textContent
        // Edge Cases:
        // 1. Double Decimal
        if (value === DECIMAL && previous === DECIMAL) return
        
        // 2. Subsequent zeros with no integer 1 - 9 prior
        // i.e. 10, 100, 1000, 10000 vs. 01, 001 which are not valid
        if (checkForSubsequentZeros(value, history)) return

        // 3. User entered 0 followed by integer 1 - 9
        // i.e. `1 + 0`, followed by `5`, should be `1 + 5`
        let alterHistory = false
        let lastIntegerFromHistory = parseInt( getLastIntegerFromHistory(history)[0] )
        debugger;
        if (lastIntegerFromHistory === 0 && parseInt(value) != 0) {
            debugger;
            alterHistory = true
        }

        // Check Inputs.js for `onSelection` function specification
        if (id === "equals") {
            return onSelection(_history)
        } else {
            return onSelection(value, _history, alterHistory, evaluated)
        }
    }

    let cs = ""
    switch(value) {
        case "AC":
            cs = [...CLASSES, "is-half", "has-background-danger"].join(" ")
            break;
        case "0":
        case ".":
            cs = [...CLASSES, "is-half", "has-background-grey"].join(" ")
            break;
        default: 
            cs = [...CLASSES, "has-background-grey"].join(" ")
            break;
    }

    return (
        <button id={id} className={cs} onClick={handleClick}>
            {value}
        </button>
    )

}

export default Input