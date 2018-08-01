import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { App } from './components'


// import { Provider } from 'react-redux'
// import { addError } from './actions'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container')
)