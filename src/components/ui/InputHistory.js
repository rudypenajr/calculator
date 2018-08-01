import React from 'react'
import '../../stylesheets/InputHistory.scss'

const InputHistory = ({history}) => {
    let final = history.join("")
    
    return (
        <div className="container is-fluid has-text-right">
            <div className="input__history">
                <p className="is-size-4">{final}</p>
            </div>
        </div>
    )

}

export default InputHistory