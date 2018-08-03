import React from 'react'
import '../../stylesheets/InputHistory.scss'

const InputHistory = ({history}) => {
    
    return (
        <div className="container is-fluid has-text-right">
            <div className="input__history">
                <p className="is-size-6">{history}</p>
            </div>
        </div>
    )

}

export default InputHistory