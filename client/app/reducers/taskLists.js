
export default function reducer (state = {
  taskLists: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_TASK_LIST_FULFILLED': {
      return {...state,
        taskLists: action.payload.data
      }
    }
  }

  return state
}
