import React from 'react'
// import '../../stylesheets/Input.scss'

const Input = ({key, value, action, cs}) => {

    return (
        <div key={key} id={action} className={cs}>
            {value}
        </div>
    )

}

export default Input