import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../Actions/ActionCreators'
import { Route } from 'react-router-dom'
import BasicUserData from './Views/BasicUserData'
// import Demographics from './Views/Demographics'
import CameraCapture from './Views/CameraCapture'

class App extends PureComponent {
  render(){
    const { cameraVisibility } = this.props
    return(
      <React.Fragment>
        {
          cameraVisibility === 'visible'
          ? <CameraCapture/>
          : <BasicUserData/>
        }
      </React.Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
