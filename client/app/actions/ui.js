
import axios from 'axios'

export function updateUi(data) {

  return {
    type: 'UPDATE_UI',
    payload: data
  }
}
