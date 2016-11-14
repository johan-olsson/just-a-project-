import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { getProjects } from '../actions/projects'

@connect((store) => {
  return { ...store.projects }
})
export default class Projects extends Component {

  componentWillMount() {
    this.props.dispatch(getProjects(this.props))
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.projects.map((project, index) =>
            <li key={index}>
              <Link to={`/${project.id}`}>
                {project.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}
