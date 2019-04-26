import _, { flow } from 'lodash'
import React, { Component } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
// import axiosConfig from './axios.config'
import axios from 'axios'

class BasicUserData extends Component {
  submit = async (values) => {
    const { history, getUserVals } = this.props
    const protocol = `https`
    const host = {
      work: `192.168.2.70`,
      home: `192.168.1.10`
    }
    const port = 3000
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
