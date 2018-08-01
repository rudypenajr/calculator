import React from 'react'
// import '../../stylesheets/Input.scss'

const Input = ({key, action, cs, value, onSelection}) => {
    // console.log(onSelection)
    const handleClick = function(e) {
        e.preventDefault()
        e.stopPropagation()

        onSelection(e.target.value)
    }

    return (
        <div key={key} id={action} className={cs} onClick={handleClick}>
            {value}
        </div>
    )

}

export default Input