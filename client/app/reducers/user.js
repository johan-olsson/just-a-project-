
export default function reducer (state = {
  user: {},
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED': {
      return {...state,
        user: action.payload.data
      }
    }
  }

  return state
}
