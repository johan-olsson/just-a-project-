import axios from 'axios'

export function getProject({ access_token, id }) {

  return {
    type: 'FETCH_PROJECT',
    payload: axios.get(`http://88.16.64.193:3001/api/projects/${id}`, {
      params: {
        authorization: `Bearer ${access_token}`
      }
    })
  }
}
