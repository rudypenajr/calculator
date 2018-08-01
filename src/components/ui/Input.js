import React from 'react'
// import '../../stylesheets/Input.scss'

const Input = ({key, action, cs, value}) => {
    return (
        <div key={key} id={action} className={cs}>
            {value}
        </div>
    )

}

export default Input