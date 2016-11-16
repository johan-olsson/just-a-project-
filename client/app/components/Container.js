import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import Activities from './Activities'
import { DragDropContext } from 'react-dnd'
import '../style/base.less'

import LoginButton from './LoginButton'

@connect((store) => {
  return {
    access_token: store.auth.access_token
  }
})
@DragDropContext(HTML5Backend)
export default class Container extends Component {

  render() {

    if (!this.props.access_token)
      return <LoginButton />

    return (
      <div id='container'>
        <Activities />
        <div className='content'>
          {this.props.page}
        </div>
        {this.props.modal}
      </div>
    )
  }
}
