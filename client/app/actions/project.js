import axios from 'axios'

export function getProject({ access_token, id }) {

  return {
    type: 'FETCH_PROJECT',
    payload: axios.get(`http://localhost:3001/api/projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}
