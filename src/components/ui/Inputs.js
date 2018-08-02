import React from 'react'
import Input from './Input'
import '../../stylesheets/Input.scss'

const Inputs = ({history, mustBeInteger, onSelection=f=>f}) => {
    return (
        <div className="container is-fluid">
            <div className="columns">
                <Input onSelection={onSelection} history={history} value="AC" action="clear" cs="is-half column has-text-centered has-background-danger has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="/" action="divide" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="x" action="multiple" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input onSelection={onSelection} history={history} value="7" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="8" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="9" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="-" action="minus" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input onSelection={onSelection} history={history} value="4" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="5" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="6" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="+" action="plus" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input onSelection={onSelection} history={history} value="1" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="2" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="3" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="=" action="equals" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input onSelection={onSelection} history={history} value="0" action="input" cs="is-half column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} history={history} value="." action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input onSelection={onSelection} value="=" action="equals" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>
        </div>
    )
}

export default Inputs