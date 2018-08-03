import React from 'react'
import Input from './Input'
import '../../stylesheets/Input.scss'

const Inputs = ({history, mustBeInteger, onSelection=f=>f, onClear=f=>f, onEvaluate=f=>f}) => {
    return (
        <div className="container is-fluid">
            <div className="columns">
                <Input id="clear" onSelection={onClear} history={history} value="AC" />
                <Input id="divide" onSelection={onSelection} history={history} value="/" />
                <Input id="multiply" onSelection={onSelection} history={history} value="x" />
            </div>

            <div className="columns">
                <Input id="seven" onSelection={onSelection} history={history} value="7" />
                <Input id="eight" onSelection={onSelection} history={history} value="8" />
                <Input id="nine" onSelection={onSelection} history={history} value="9" />
                <Input id="subtract" onSelection={onSelection} history={history} value="-" />
            </div>

            <div className="columns">
                <Input id="four" onSelection={onSelection} history={history} value="4" />
                <Input id="five" onSelection={onSelection} history={history} value="5" />
                <Input id="six" onSelection={onSelection} history={history} value="6" />
                <Input id="add" onSelection={onSelection} history={history} value="+" />
            </div>

            <div className="columns">
                <Input id="one" onSelection={onSelection} history={history} value="1" />
                <Input id="two" onSelection={onSelection} history={history} value="2" />
                <Input id="three" onSelection={onSelection} history={history} value="3" />
                <Input id="equals" onSelection={onEvaluate} history={history} value="=" />
            </div>

            <div className="columns">
                <Input id="zero" onSelection={onSelection} history={history} value="0" />
                <Input id="decimal" onSelection={onSelection} history={history} value="." />
            </div>
        </div>
    )
}

export default Inputs