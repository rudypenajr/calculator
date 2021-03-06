import React from 'react'
import CurrentInput from '../ui/CurrentInput'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    input: state.current
})

export default connect(mapStateToProps)(CurrentInput)