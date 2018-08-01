import C from './constants'
import fetch from 'isomorphic-fetch'

export const setInput = (value) => ({
    type: C.INPUT_NUMBER,
    payload: value
})