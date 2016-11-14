import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projects from './projects'
import project from './project'
import taskLists from './taskLists'
import tasks from './tasks'
import auth from './auth'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  auth,
  user,
  tasks,
  taskLists,
  project,
  projects
})
