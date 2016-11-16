import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router'

export default class Activity extends Component {

  render() {

    var className = classnames({
      activity: true
    })

    return (
      <li className={className}>
        <Link to={`${this.props.activity.project_id}/${this.props.activity.task_id}`}>
          {this.props.activity.title}
        </Link>
      </li>
    )
  }
}
