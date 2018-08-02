import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('store.getState() ===> ', store.getState())
	result = next(action)

	let { history, current } = store.getState()

	console.log(`

		history: ${history},
		current: ${current}

	`)

	console.groupEnd()
	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}



