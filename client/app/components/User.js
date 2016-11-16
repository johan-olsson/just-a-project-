import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getUserInformation } from '../actions/user'

@connect((store) => {
  return { ...store.user }
})
export default class User extends Component {

  componentWillMount() {
    this.props.dispatch(getUserInformation(this.props))
  }

  render() {
    return (
      <div>// Display some user information
      </div>
    )
  }
}
