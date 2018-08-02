import React from 'react'
import Inputs from '../ui/Inputs'
import { connect } from 'react-redux';
import { handleSelection } from '../../actions'

const mapStateToProps = (state, props) =>  {
    debugger;
    const operators = ["+", "-", "*", "/"]
    const last = state.history[state.history.length - 1]
    const mustBeInteger = operators.includes(last)

    return {
        history: state.history,
        mustBeInteger,
    }
}

const mapDispatchToProps = dispatch => ({
    onSelection(value, previous) {
        dispatch(
            handleSelection(value, previous)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)

// export default () =>
//     <Inputs />
