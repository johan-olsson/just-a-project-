
export default function reducer (state = {
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token')
}, action) {
  switch (action.type) {
    case 'SAVE_TOKENS': {

      var expires = Date.now() + 72000

      localStorage.setItem('access_token', action.payload.access_token)
      localStorage.setItem('refresh_token', action.payload.refresh_token)
      localStorage.setItem('expires', expires)

      return {...state,
        ...action.payload,
        expires
      }
    }
  }

  return state
}
