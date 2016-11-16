export default function reducer(state = {
  tasks: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED':

      var tasks = [].concat(action.payload.data)

      return {...state,
        tasks: [].concat(action.payload.data, state.tasks.filter((item) => {
          if (tasks.find((task) => {
            return item.id === task.id
          })) return false;

          return true
        }))
        .sort((a, b) => {
          return a.row_order - b.row_order
        })
      }

    case 'UPDATE_TASK_STARTED':

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id)
            return { ...task, ...action.payload };

          return task
        })
      }

    case 'MOVE_TASK_STARTED':

      var task = state.tasks.find((task) => {
        return task.id === action.payload.id
      })

      task.task_list_id = action.payload.task_list_id

      var tasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id
          && task.task_list_id === action.payload.task_list_id
      })

      tasks.splice(action.payload.position, 0, task)

      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.task_list_id !== action.payload.task_list_id
        })
        .concat(tasks)
      }

    case 'MOVE_TASK_FULFILLED':
      return {...state,
        tasks: state.tasks
          .map(function(task) {
            if (task.id === action.payload.data.id)
              return {...task,
                ...action.payload.data
              };

            return task
          })
          .sort((a, b) => {
            return a.row_order - b.row_order
          })

      }

  }
  return state
}
