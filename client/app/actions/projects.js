import axios from 'axios'

export function getProjects({ access_token }) {

  return {
    type: 'FETCH_PROJECTS',
    payload: axios.get('http://localhost:3001/api/projects', {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}
