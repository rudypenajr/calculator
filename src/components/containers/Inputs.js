import React from 'react'
import Inputs from '../ui/Inputs'
import { connect } from 'react-redux';
import { setInput } from '../../actions'

const mapStateToProps = (state, props) =>  ({})

const mapDispatchToProps = dispatch => ({
    onSelection({value}) {
        dispatch(
            setInput(value)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)

// export default () =>
//     <Inputs />
