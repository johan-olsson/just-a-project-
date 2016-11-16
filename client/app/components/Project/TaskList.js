import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { getTasks, moveTask, orderTask } from '../../actions/tasks'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd';
import Task from './Task'

@connect((store) => {
  return {
    tasks: store.tasks.tasks,
    access_token: store.auth.access_token
  }
})
@DropTarget('TASK', {
  drop(props, monitor, component) {

    if (!monitor.didDrop())
      props.dispatch(moveTask({
        id: monitor.getItem().task.id,
        task_list_id: props.taskList.id,
        access_token: props.access_token,
        position: 0,
      }))
  }
}, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({
      shallow: true
    })
  }
})
export default class TaskList extends Component {

  componentWillMount() {
    this.props.dispatch(getTasks({
      ...this.props,
      ...this.props.taskList
    }))
  }

  render() {

    var tasks = this.props.tasks.filter((task) => {
        return task.task_list_id === this.props.taskList.id
      })
      .filter((task) => {
        return task.status !== 'resolved'
      })

    return this.props.connectDropTarget(
      <li>
        <h3>{this.props.taskList.name}</h3>
        <ul className='tasks'>
          {(this.props.isOver)?
            <shadow/> : null
          }

          {tasks.map((task, index) => {
            return <Task key={index}
                         position={index}
                         access_token={this.props.access_token}
                         dispatch={this.props.dispatch}
                         task={task} />
          })}
        </ul>
      </li>
    )
  }
}
