import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Projects from './Projects'
import User from './User'

@connect((store) => {
  return {
    access_token: store.auth.access_token
  }
})
export default class App extends Component {

  render() {

    return (
      <div>
        <Projects access_token={this.props.access_token} />
        <User access_token={this.props.access_token} />
      </div>
    )
  }
}
