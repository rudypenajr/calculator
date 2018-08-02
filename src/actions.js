import C from './constants'

// const isOperator = /[x/+‑]/
// const endsWithOperator = /[x+‑/]$/


export const addHistory = (value) => ({
    type: C.ADD_HISTORY,
    payload: value
})

export const clearHistory = () => ({
    type: C.RESET_HISTORY
})

export const calculateHistory = () => ({
    type: C.CALCULATE_HISTORY
})

export const addCurrent = value => {
    return {
        type: C.ADD_CURRENT,
        payload: value
    }
}

export const resetCurrent = () => ({
    type: C.RESET_HISTORY
})

export const addPrevious = previous => ({
    type: C.ADD_PREVIOUS,
    payload: previous
})

export const addCurrentSign = sign => ({
    type: C.ADD_CURRENT_SIGN,
    payload: sign
})

export const evaluated = evaluated => ({
    type: C.EVALUATE,
    payload: evaluated
})

export const handleSelection = (value, previous) => dispatch => {
    let update = value
    const isOperator = /[x/+‑]/.test(value)
    
    if (isOperator) {
        update = " " + value + " "
    } 

    dispatch(addHistory(update))
    dispatch(addCurrent(update))
    dispatch(addPrevious(previous))
}

export const handleEvaluation = (history) => dispatch => {
    debugger;
    // dispatch(addHistory(0))
    // dispatch(addCurrent(0))
    dispatch(evaluated(true))
}