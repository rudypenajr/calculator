import React from 'react'
// import '../../stylesheets/Input.scss'

const CLASSES = [
    'column',
    'has-text-centered',
    'has-text-white',
    'is-size-5'
]

const DECIMAL = "."

const Input = ({onSelection, history, id, value}) => {
    const _history = history

    const handleClick = e => {
        e.preventDefault()

        const value = e.target.textContent
        const previous = history[history.length - 1]

        if (value === DECIMAL && previous === DECIMAL) return

        debugger;
        if (id === "equals") {
            onSelection(_history)
        } else {
            onSelection(value, _history)
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