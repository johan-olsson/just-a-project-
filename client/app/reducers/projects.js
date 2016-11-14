
export default function reducer (state = {
  projects: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS_FULFILLED': {
      return {...state,
        projects: action.payload.data
      }
    }
  }

  return state
}
