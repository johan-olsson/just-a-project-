import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import { DropTarget, DragSource } from 'react-dnd';
import { moveTask } from '../../actions/tasks'

@DropTarget('TASK', {
  drop(props, monitor, component) {

    var target = monitor.getItem()

    props.dispatch(moveTask({
      id: target.task.id,
      task_list_id: props.task.task_list_id,
      access_token: props.access_token,
      position: props.position + ((target.position < props.position
        && target.task.task_list_id === props.task.task_list_id)? 0 : 1)
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
@DragSource('TASK', {
  beginDrag(props, monitor, component) {
    return props
  }
}, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
})
export default class Task extends Component {

  render() {

    var className = classnames({
      'is-dragging': this.props.isDragging,
      'urgent': this.props.task.urgent
    })

    return this.props.connectDropTarget(
        this.props.connectDragSource(
        <div>
          <li className={className}>
            <Link to={`/${this.props.task.project_id}/${this.props.task.id}`}>
              <h4>
                {this.props.task.name}
              </h4>
              <p>
                {this.props.task.description}
              </p>
            </Link>
          </li>
          {(this.props.isOver)?
            <shadow/> : null
          }
        </div>
      )
    )
  }
}
