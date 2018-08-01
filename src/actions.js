import C from './constants'
import fetch from 'isomorphic-fetch'

export const setHistory = (value) => ({
    type: C.INPUT_NUMBER,
    payload: value
})