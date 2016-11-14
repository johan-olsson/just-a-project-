import axios from 'axios'

export function getUserInformation({ access_token }) {

  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:3001/api/me', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}
