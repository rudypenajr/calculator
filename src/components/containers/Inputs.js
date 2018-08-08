import React from 'react'
import Inputs from '../ui/Inputs'
import { connect } from 'react-redux';
import { handleClear, handleSelection, handleEvaluation } from '../../actions'

const mapStateToProps = (state, props) =>  {
    return {
        history: state.history,
        evaluated: state.evaluated
    }
}

const mapDispatchToProps = dispatch => ({
    onSelection(value, history, alterHistory, evaluated) {
        dispatch(
            handleSelection(value, history, alterHistory, evaluated)
        )
    },
    onClear() {
        dispatch(
            handleClear()
        )
    },
    onEvaluate(history) {
        dispatch(
            handleEvaluation(history)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)

// export default () =>
//     <Inputs />
