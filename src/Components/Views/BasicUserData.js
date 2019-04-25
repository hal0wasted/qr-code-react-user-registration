import _, { flow } from 'lodash'
import React, { Component } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'

class BasicUserData extends Component {
  submit = (values) => {
    const { history } = this.props
    console.log(values)
    // history.push('/QrReader')
    history.push('/CameraCapture')
  }
  render(){
    const title = 'User Data'
    const { scan } = this.props
    console.log(scan)
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
