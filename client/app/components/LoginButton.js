import React, { Component, PropTypes } from 'react'

export default class StoreToken extends Component {

  login() {
    location.href = '/api/authorize'
  }

  render() {
    return (
      <div className='login'
           onClick={this.login}>
        Login
      </div>
    )
  }
}
