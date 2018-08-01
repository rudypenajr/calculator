import React from 'react'
import InputHistory from '../ui/InputHistory'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    history: state.history
})

export default connect(mapStateToProps)(InputHistory)