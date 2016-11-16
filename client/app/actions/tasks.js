
import axios from 'axios'
import store from '../store'

export function getTaskLists({ access_token, id }) {

  return {
    type: 'FETCH_TASK_LIST',
    payload: axios.get(`http://88.16.64.193:3001/api/task_lists`, {
      params: {
        project_id: id,
        authorization: `Bearer ${access_token}`
      }
    })
  }
}

export function getTasks({ access_token, id }) {

  return {
    type: 'FETCH_TASKS',
    payload: axios.get(`http://88.16.64.193:3001/api/tasks`, {
      params: {
        task_list_id: id,
        authorization: `Bearer ${access_token}`
      }
    })
  }
}

export function getTask({ access_token, id }) {

  return {
    type: 'FETCH_TASKS',
    payload: axios.get(`http://88.16.64.193:3001/api/tasks/${id}`, {
      params: {
        authorization: `Bearer ${access_token}`
      }
    })
  }
}

export function moveTask(data) {

  store.dispatch({
    type: 'MOVE_TASK_STARTED',
    payload: data
  })

  return {
    type: 'MOVE_TASK',
    payload: axios.put(`http://88.16.64.193:3001/api/tasks/${data.id}`, {
      data: { ...data,
        authorization: `Bearer ${data.access_token}` // For some reason authorization is not accepted for put requests
      }
    })
  }
}

export function updateTask(data) {

  store.dispatch({
    type: 'UPDATE_TASK_STARTED',
    payload: data
  })

  return {
    type: 'UPDATE_TASK',
    payload: axios.put(`http://88.16.64.193:3001/api/tasks/${data.id}`, {
      data: { ...data,
        authorization: `Bearer ${data.access_token}` // For some reason authorization is not accepted for put requests
      }
    })
  }
}
