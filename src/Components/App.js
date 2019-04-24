import React from 'react'
import { connect } from 'react-redux'
import _, { flow } from 'lodash'
import { mapState, mapDispatch } from '../Actions/ActionCreators'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'
import BasicUserData from './Views/BasicUserData'
import QrReader from './Views/QrReader'

class App extends React.Component {
  componentDidMount(){
    const { test, history } = this.props
    test()
    history.push('/UserData')
  }
  render(){
    const { location, history } = this.props
    location.pathname === '/' ? history.push('/UserData') : null
    return(
      <React.Fragment>
        <Route path={'/UserData'} component={BasicUserData} />
        <Route path={'/QrReader'} component={QrReader} />

      </React.Fragment>
    )
  }
}

export default flow(
  connect(mapState, mapDispatch),
  withRouter
)(App)
