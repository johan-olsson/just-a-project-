import React, { Component, PropTypes } from 'react'

export default class StoreToken extends Component {

  login() {
    location.href = '/api/authorize'
  }

  render() {
    return (
      <div onClick={this.login}>
        Login
      </div>
    )
  }
}
