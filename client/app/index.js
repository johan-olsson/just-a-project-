import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

import Container from './components/Container'
import App from './components/App'
import StoreToken from './components/StoreToken'
import TaskView from './components/Project/TaskView'
import Project from './components/Project'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={Container} >
          <IndexRoute components={{page: App}} />
          <Route path='/:id' components={{page: Project}} />
          <Route path='/:id/:task_id' components={{page: Project, modal: TaskView}} />
        </Route>
        <Route path='/save-tokens/:access_token/:refresh_token' components={StoreToken} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
