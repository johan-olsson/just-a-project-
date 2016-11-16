import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projects from './projects'
import project from './project'
import activities from './activities'
import taskLists from './taskLists'
import tasks from './tasks'
import ui from './ui'
import auth from './auth'
import user from './user'

export default combineReducers({
  routing: routerReducer,
  auth,
  user,
  tasks,
  ui,
  activities,
  taskLists,
  project,
  projects
})
