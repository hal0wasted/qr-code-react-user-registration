import React, { Component, PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../Actions/ActionCreators'
import { Route } from 'react-router-dom'
import BasicUserData from './Views/BasicUserData'
import Demographics from './Views/Demographics'
// import ConsentForm from './Views/ConsentForm'
import CameraCapture from './Views/CameraCapture'
import UserRegisteredPopUp from './Subcomponents/UserRegisteredPopUp'

class App extends Component {
  render(){
    const { cameraVisibility, userRegisteredPopUpVisibility } = this.props
    return(
      <Fragment>
        <div className='app-body'>
          {/*cameraVisibility === 'hidden' ? <BasicUserData/> : null*/}
          {/*<CameraCapture/>*/}
          <Demographics/>
          {/*<ConsentForm/>*/}
          {/*userRegisteredPopUpVisibility === 'visible' ? <UserRegisteredPopUp/> : null*/}
        </div>
      </Fragment>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
