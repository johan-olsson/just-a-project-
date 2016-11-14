import axios from 'axios'

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

export function moveTask(access_token, task_list_id, task_id) {

  return {
    type: 'MOVE_TASK',
    payload: axios.put(`http://localhost:3001/api/tasks/${task_id}`, {
      data: {
        task_list_id: task_list_id,
        authorization: `Bearer ${access_token}` // For some reason authorization is not accepted for put requests
      }
    })
  }
}
