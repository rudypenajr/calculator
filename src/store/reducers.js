import C from '../constants'
import { combineReducers } from 'redux'

export const history = (state={}, action) => 
	(action.type === C.INPUT_NUMBER) ? 
		 action.payload :
		 state


export default combineReducers({
    history
})