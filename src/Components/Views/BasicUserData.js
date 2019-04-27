import _, { flow } from 'lodash'
import React, { Component, PureComponent } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import { host, protocol, port } from '../../../config'
import axios from 'axios'

class BasicUserData extends PureComponent {
  submit = async (values) => {
    const { history, getUserVals } = this.props
    console.log(values)
    // history.push('/QrReader')
    getUserVals(values)
    history.push('/CameraCapture')
  }
  render(){
    const title = 'User Data'
    const { qr } = this.props
    console.log(qr)
    return (
      <div>
        <Title title={title}/>
        <UserDataForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default flow(
  connect(mapState, mapDispatch),
  withRouter
)(BasicUserData)
