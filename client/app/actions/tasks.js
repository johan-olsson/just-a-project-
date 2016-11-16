
import axios from 'axios'
import store from '../store'

export function getTaskLists({ access_token, id }) {

  return {
    type: 'FETCH_TASK_LIST',
    payload: axios.get(`http://localhost:3001/api/task_lists`, {
      data: {
        project_id: id
      },
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}

export function getTasks({ access_token, id }) {

  return {
    type: 'FETCH_TASKS',
    payload: axios.get(`http://localhost:3001/api/tasks`, {
      data: {
        task_list_id: id
      },
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      }
    })
  }
}

export function getTask({ access_token, id }) {

  return {
    type: 'FETCH_TASKS',
    payload: axios.get(`http://localhost:3001/api/tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
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
    payload: axios.put(`http://localhost:3001/api/tasks/${data.id}`, {
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
    payload: axios.put(`http://localhost:3001/api/tasks/${data.id}`, {
      data: { ...data,
        authorization: `Bearer ${data.access_token}` // For some reason authorization is not accepted for put requests
      }
    })
  }
}
