import React from 'react'
import '../../stylesheets/CurrentInput.scss'

const CurrentInput = ({input}) => {

    return (
        <div className="container is-fluid has-text-right">
            <div id="display" className="input__current">
                <p className="is-size-7">{input}</p>
            </div>
        </div>
    )

}

export default CurrentInput