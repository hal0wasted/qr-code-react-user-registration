import _, { flow } from 'lodash'
import React, { Component } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
// import axios from 'axios'

class BasicUserData extends Component {
  submit = (values) => {
    const { history } = this.props
    console.log(values)
    // history.push('/QrReader')
    //{ may need to submit form data to DB here before moving to CameraCapture View
      history.push('/CameraCapture')
    //}
  }
  render(){
    const title = 'User Data'
    const { qr } = this.props
    console.log(qr)
    return (
      <div>
        <Title title={title}/>
        <UserDataForm onSubmit={this.submit}/>
        { qr !== null ? <div>{qr}</div> : <div>no qr data.</div> }
      </div>
    )
  }
}

export default flow(
  connect(mapState, mapDispatch),
  withRouter
)(BasicUserData)
