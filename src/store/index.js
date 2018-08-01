import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result
	console.log('store:', store)
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('store.getState() ===> ', store.getState())
	result = next(action)

	let { history, input, output } = store.getState()

	console.log(`

		history: ${history}
		input: ${input}
		output: ${output}

	`)

	console.groupEnd()
	return result

}

export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}



