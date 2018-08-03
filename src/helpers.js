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