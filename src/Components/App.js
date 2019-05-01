import React, { Component, PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../Actions/ActionCreators'
import { Route } from 'react-router-dom'
import BasicUserData from './Views/BasicUserData'
// import Demographics from './Views/Demographics'
import CameraCapture from './Views/CameraCapture'
import UserRegisteredPopUp from './Subcomponents/UserRegisteredPopUp'

class App extends Component {
  render(){
    const { cameraVisibility, userRegisteredPopUpVisibility } = this.props
    return(
      <Fragment>
        <div style={{ height: innerHeight+'px' }} className='app-body'>
          { cameraVisibility === 'hidden' ? <BasicUserData/> : null }
          <CameraCapture/>
          { userRegisteredPopUpVisibility === 'visible' ? <UserRegisteredPopUp/> : null }
        </div>
      </Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
