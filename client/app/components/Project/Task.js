import React, { Component, PropTypes } from 'react'
import { DropTarget, DragSource } from 'react-dnd';


@DropTarget('TASK', {
  drop(props, monitor, component) {
    console.log(
      props.access_token,
      props.taskList.id,
      monitor.getItem().task.id
    )
  }
}, (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
})
@DragSource('TASK', {
  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    console.log(props)
    return props
  }
}, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
  // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  }
})
export default class Task extends Component {

  render() {
    return this.props.connectDropTarget(
        this.props.connectDragSource(
        <li>
          <h4>
            {this.props.task.name}
          </h4>
          <p>
            {this.props.task.description}
          </p>
        </li>
      )
    )
  }
}
