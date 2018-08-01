import React from 'react'
import '../../stylesheets/CurrentInput.scss'

const CurrentInput = ({input}) => {

    return (
        <div className="container is-fluid has-text-right">
            <div className="input__current">
                <p>{input}</p>
            </div>
        </div>
    )

}

export default CurrentInput