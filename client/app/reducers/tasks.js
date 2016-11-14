

export default function reducer (state = {
  tasks: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_TASKS_FULFILLED': {
      return {...state,
        tasks: [...action.payload.data]
      }
    }
    case 'MOVE_TASK_FULFILLED': {
      // return state
      return {...state,
        tasks: state.tasks.map(function (task) {
          if (task.id === action.payload.data.id)
            return action.payload.data;

          return task
        })
      }
    }
  }

  return state
}
