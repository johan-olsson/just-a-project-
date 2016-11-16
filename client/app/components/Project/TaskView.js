import React, { Component, PropTypes } from 'react'
import { getTask, updateTask } from '../../actions/tasks'
import classnames from 'classnames'
import { connect } from 'react-redux'
import keydown from 'react-keydown'
import { push } from 'react-router-redux'

@connect((store) => {
  return {
    tasks: store.tasks.tasks,
    access_token: store.auth.access_token
  }
})
export default class TaskView extends Component {

  @keydown(27)
  close() {
    this.props.router.push(`/${this.props.params.id}`);
  }

  toggleStatus(task, event) {
    this.props.dispatch(updateTask({
      status: (task.status === 'resolved')?'open':'resolved',
      access_token: this.props.access_token,
      id: task.id
    }))
  }

  componentWillMount() {
    this.props.dispatch(getTask({
      access_token: this.props.access_token,
      id: this.props.params.task_id
    }))
  }

  render() {

    var task = this.props.tasks.find((task) => {
      return task.id == this.props.params.task_id
    })

    if (!task)
      return <div>loading...</div>

    var buttonClassName = classnames({
      resolve: task.status === 'resolved',
      open: task.status !== 'resolved'
    })

    return (
      <div className='modal-container'>
        <div className='modal-overlay' onClick={this.close.bind(this)} />
        <div className='task'>
          <h2>
            {task.name}
          </h2>
          <p>
            {task.description}
          </p>
          <div className={buttonClassName}
               onClick={this.toggleStatus.bind(this, task)}>
            {(task.status === 'resolved')?'Open':'Resolve'}
          </div>
        </div>
      </div>
    )
  }
}
