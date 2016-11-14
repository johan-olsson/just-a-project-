import React, { Component, PropTypes } from 'react'
import { getTasks, moveTask } from '../../actions/tasks'
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
    console.log(
      props.access_token,
      props.taskList.id,
      monitor.getItem().task.id
    )
    props.dispatch(moveTask(
      props.access_token,
      props.taskList.id,
      monitor.getItem().task.id
    ))
  }
}, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
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

    return this.props.connectDropTarget(
      <li>
        <h3>
          {this.props.taskList.name}
        </h3>
        <ul className="tasks">
          {this.props.tasks.filter((task) => {
            return task.task_list_id === this.props.taskList.id
          })
          .map((task, index) => {
            return <Task key={index}
                         dispatch={this.props.dispatch}
                         task={task} />
          })}
        </ul>
      </li>
    )
  }
}
