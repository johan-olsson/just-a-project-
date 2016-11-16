import React, { Component, PropTypes } from 'react'
import { getActivities } from '../../actions/activities'
import { updateUi } from '../../actions/ui'
import { connect } from 'react-redux'
import classnames from 'classnames'
import moment from 'moment'
import Activity from './Activity'

@connect((store) => {
  return {
    activities: store.activities.activities,
    access_token: store.auth.access_token,
    ui: store.ui.ui
  }
})
export default class Activities extends Component {

  componentWillMount() {
    this.props.dispatch(getActivities(this.props))
  }

  toggle() {
    this.props.dispatch(updateUi({
      sideBarVisisble: !this.props.ui.sideBarVisisble
    }))
  }

  render() {

    var className = classnames({
      'material-icons': true,
      'toggle-button': true,
      'visible-side-bar': this.props.ui.sideBarVisisble
    })
    var category

    return (
      <div className='side-bar'>
        {(this.props.ui.sideBarVisisble)?<ul className='activities'>
          <div>
            {this.props.activities.map((activity, index) => {
              var render = [<Activity activity={activity} key={index} />]
              var timeAgo = moment(activity.updated_at * 1000).fromNow()

              if (category !== timeAgo) {
                category = timeAgo
                render.unshift(<lh>Updated {category}</lh>)
              }

              return render
            })}
          </div>
        </ul> : null}
        <div className={className}
             onClick={this.toggle.bind(this)}>
          {(this.props.ui.sideBarVisisble)?'format_indent_decrease':'format_indent_increase'}
        </div>
      </div>
    )
  }
}
