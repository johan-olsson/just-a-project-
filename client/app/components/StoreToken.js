import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { saveTokens } from '../actions/auth'

@connect((store) => {
  return {}
})
export default class StoreToken extends Component {

  componentWillMount () {
    this.props.dispatch(saveTokens({
      access_token: this.props.params.access_token,
      refresh_token: this.props.params.refresh_token
    }))
    this.props.router.push('/')
  }

  render() {
    return null
  }
}
