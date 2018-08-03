import React from 'react'
import Input from './Input'
import '../../stylesheets/Input.scss'

const Inputs = ({history, mustBeInteger, onSelection=f=>f, onClear=f=>f, onEvaluate=f=>f}) => {
    return (
        <div className="container is-fluid">
            <div className="columns">
                <Input id="clear" onSelection={onClear} history={history} value="AC" />
                <Input id="divide" onSelection={onSelection} history={history} value="/" />
                <Input id="multiple" onSelection={onSelection} history={history} value="x" />
            </div>

            <div className="columns">
                <Input id="input" onSelection={onSelection} history={history} value="7" />
                <Input id="input" onSelection={onSelection} history={history} value="8" />
                <Input id="input" onSelection={onSelection} history={history} value="9" />
                <Input id="minus" onSelection={onSelection} history={history} value="-" />
            </div>

            <div className="columns">
                <Input id="input" onSelection={onSelection} history={history} value="4" />
                <Input id="input" onSelection={onSelection} history={history} value="5" />
                <Input id="input" onSelection={onSelection} history={history} value="6" />
                <Input id="plus" onSelection={onSelection} history={history} value="+" />
            </div>

            <div className="columns">
                <Input id="input" onSelection={onSelection} history={history} value="1" />
                <Input id="input" onSelection={onSelection} history={history} value="2" />
                <Input id="input" onSelection={onSelection} history={history} value="3" />
                <Input id="equals" onSelection={onEvaluate} history={history} value="=" />
            </div>

            <div className="columns">
                <Input id="input" onSelection={onSelection} history={history} value="0" />
                <Input id="input" onSelection={onSelection} history={history} value="." />
            </div>
        </div>
    )
}

export default Inputs