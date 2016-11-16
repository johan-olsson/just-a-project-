
export default function reducer(state = {
  ui: {
    sideBarVisisble: false
  }
}, action) {
  switch (action.type) {
    case 'UPDATE_UI': {
      return {...state,
        ui: { ...state.ui, ...action.payload }
      }
    }
  }

  return state
}
