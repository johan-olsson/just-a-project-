
export default function reducer (state = {
  activities: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_ACTIVITIES_FULFILLED': {
      return {...state,
        activities: action.payload.data.sort()
        .filter((item) => {
          return item.target_type === 'Task'
            || item.target_type === 'Comment'
        })
        .map((item) => {
          return { ...item,
            task_id: item.comment_target_id || item.target_id
          }
        })
        .filter((item, index, arr) => {
          if (item === arr.find((task) => {
            return task.target_id === item.task_id
          })) return true;

          return false
        })
        .sort((a, b) => {
          return b.updated_at - a.updated_at
        })
      }
    }
  }

  return state
}
