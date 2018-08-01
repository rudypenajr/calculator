import C from '../constants'
import { combineReducers } from 'redux'

export const currentInput = (state={}, action) => 
	(action.type === C.INPUT_NUMBER) ? 
		 action.payload :
		 state


export default combineReducers({
    currentInput
})