export const isString = (value) => {
    return (typeof value === "string") ? true : false
}

export const convertStringToInteger = (value) => {
    return parseInt(value)
}

export const add = (acc, curr) => {
    let a = acc
    let b  = curr

    if (isString(a)) {
        a = convertStringToInteger(a)
    }

    if (isString(b)) {
        b = convertStringToInteger(b)
    }

    return a + b
}

export const subtract = (acc, curr) => {
    let a = acc
    let b  = curr

    if (isString(a)) {
        a = convertStringToInteger(a)
    }

    if (isString(b)) {
        b = convertStringToInteger(b)
    }

    return a - b
}

export const divide = (acc, curr) => {
    let a = acc
    let b  = curr

    if (isString(a)) {
        a = convertStringToInteger(a)
    }

    if (isString(b)) {
        b = convertStringToInteger(b)
    }

    return Math.floor(a / b)
}

export const multiply = (acc, curr) => {
    let a = acc
    let b  = curr

    if (isString(a)) {
        a = convertStringToInteger(a)
    }

    if (isString(b)) {
        b = convertStringToInteger(b)
    }

    return a * b
}

export const getLastWholeIntegerFromHistory = (history) => {
    const historySplit = history.split(" ")
    return historySplit[historySplit.length - 1]
}

export const getLastIntegerFromHistory = (history) => {
    const previousValue = getLastWholeIntegerFromHistory(history)
    
    return previousValue.split("")
}

export const getFirstInteger = (valueInArrayFormat) => {
    return parseInt(valueInArrayFormat)[0]
}

export const checkForSubsequentZeros = (value, history) => {
    const previousValueSplit = getLastIntegerFromHistory( history )
    const startWithInteger = getFirstInteger( previousValueSplit )
    
    return (startWithInteger === 0 && parseInt(value) === 0)
}

export const rewriteLastValue = (value, history) => {
    const historySplit = history.split(" ")
    historySplit[historySplit.length - 1] = value
    
    return historySplit.join(" ")
}