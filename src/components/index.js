import React from 'react'
import InputHistory from './containers/InputHistory'
import CurrentInput from './containers/CurrentInput'
import Inputs from './containers/Inputs'
import '../stylesheets/index.scss'

export const App = ({children}) => 
    <div className="app calculator">
        <div className="container">
            <div className="card">
                <div className="card-content">
                    <InputHistory />
                    <CurrentInput />
                    <Inputs />
                </div>
            </div>
        </div>
    </div>
