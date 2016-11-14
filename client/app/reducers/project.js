
export default function reducer (state = {
  project: {},
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_PROJECT_FULFILLED': {
      return {...state,
        project: action.payload.data
      }
    }
  }

  return state
}
