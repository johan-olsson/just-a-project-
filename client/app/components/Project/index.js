import React, { Component, PropTypes } from 'react'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import { getProject } from '../../actions/project'
import { getTaskLists } from '../../actions/tasks'

@connect((store) => {
  return {
    ...store.project,
    ...store.taskLists,
    access_token: store.auth.access_token
  }
})
export default class Project extends Component {

  componentWillMount() {
    this.props.dispatch(getProject({ ...this.props.params, ...this.props }))
    this.props.dispatch(getTaskLists({ ...this.props.params, ...this.props }))
  }

  render() {
    return (
      <div className="project">
        <h2>
          {this.props.project.name}
        </h2>
        <ul className="columns">
          {this.props.taskLists.sort((a, b) => {
            return a.position - b.position
          })
          .map((taskList, index) => {
            return <TaskList key={index}
                             taskList={taskList}/>
          })}
        </ul>
      </div>
    )
  }
}
