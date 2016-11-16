import axios from 'axios'

export function getUserInformation({ access_token }) {

  return {
    type: 'FETCH_USER',
    payload: axios.get('http://88.16.64.193:3001/api/me', {
      params: {
        authorization: `Bearer ${access_token}`
      }
    })
  }
}
