
import axios from 'axios'

export function getActivities({ access_token }) {

  return {
    type: 'FETCH_ACTIVITIES',
    payload: axios.get('http://localhost:3001/api/activities', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}
