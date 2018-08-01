import React from 'react'
import Input from './Input'
import '../../stylesheets/Input.scss'

const Inputs = () => {

    return (
        <div className="container is-fluid">
            <div className="columns">
                <Input key="1" value="AC" action="clear" cs="is-half column has-text-centered has-background-danger has-text-white is-size-5" />
                <Input key="2" value="/" action="divide" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="3" value="x" action="multiple" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input key="4" value="7" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="5" value="8" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="6" value="9" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="7" value="-" action="minus" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input key="8" value="4" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="9" value="5" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="10" value="6" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="11" value="+" action="plus" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input key="12" value="1" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="13" value="2" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="14" value="3" action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="15" value="=" action="equals" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>

            <div className="columns">
                <Input key="16" value="0" action="input" cs="is-half column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="17" value="." action="input" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
                <Input key="18" value="=" action="equals" cs="column has-text-centered has-background-grey has-text-white is-size-5" />
            </div>
        </div>
    )
}

export default Inputs