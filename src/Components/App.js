import React, { Component, PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../Actions/ActionCreators'
import { Route } from 'react-router-dom'
import BasicUserData from './Views/BasicUserData'
// import Demographics from './Views/Demographics'
import CameraCapture from './Views/CameraCapture'

class App extends Component {
  render(){
    const { cameraVisibility } = this.props
    return(
      <Fragment>
        <div className='app-body'>
          { cameraVisibility === 'hidden' ? <BasicUserData/> : null }
          <CameraCapture/>
        </div>
      </Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
