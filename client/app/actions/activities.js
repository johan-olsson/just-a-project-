
import axios from 'axios'

export function getActivities({ access_token }) {

  return {
    type: 'FETCH_ACTIVITIES',
    payload: axios.get('http://88.16.64.193:3001/api/activities', {
      params: {
        authorization: `Bearer ${access_token}`
      }
    })
  }
}
