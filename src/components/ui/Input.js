import React from 'react'
// import '../../stylesheets/Input.scss'

const Input = ({onSelection, history, action, cs, value}) => {
    const handleClick = e => {
        e.preventDefault()

        debugger;
        const value = e.target.textContent
        const previous = history[history.length - 1]
        onSelection(value, previous)
    }

    return (
        <div id={action} className={cs} onClick={handleClick}>
            {value}
        </div>
    )

}

export default Input