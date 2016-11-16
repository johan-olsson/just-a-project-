import axios from 'axios'

export function getProjects({ access_token }) {

  return {
    type: 'FETCH_PROJECTS',
    payload: axios.get('http://88.16.64.193:3001/api/projects', {
      params: {
        authorization: `Bearer ${access_token}`
      }
    })
  }
}
