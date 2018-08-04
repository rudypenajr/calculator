import C from '../constants'
import { combineReducers } from 'redux'

export const history = (state="", action) => {
	switch (action.type) {
		case C.ADD_HISTORY:
			return state + historyItem(null, action)
		case C.RESET_HISTORY: 
			return ""
		case C.CALCULATE_HISTORY:
			return state + action.payload
		case C.REWRITE_HISTORY:
			return action.payload
		default:
			return state
	}
	
	return []
}

export const historyItem = (state=null, action) => 
  (action.type === C.ADD_HISTORY) ?
  	action.payload :
  	state


export const current = (state=0, action) => {
	switch(action.type) {
		case C.ADD_CURRENT:
			return action.payload
		case C.RESET_CURRENT:
			return 0
		default:
			return state
	}
}

export const previous = (state=0, action) => {
	switch(action.type) {
		case C.ADD_PREVIOUS:
			return action.payload
		default: 
			return state
	}
}

export const sign = (state="pos", action) => {
	switch(action.type) {
		case C.ADD_CURRENT_SIGN:
			return action.payload
		default: 
			return state
	}
}

export const evaluated = (state=false, action) => {
	switch(action.type) {
		case C.EVALUATED:
			return action.payload
		default: 
			return state
	}
}

export default combineReducers({
	history,
	current,
	previous,
	sign,
	evaluated
})