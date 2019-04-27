import ScrollLock from 'react-scrollLock'
import React, { Component, PureComponent } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import { host, protocol, port } from '../../../config'
import axios from 'axios'

class BasicUserData extends Component {
  submit = (values) => {
    const { getUserVals, showCamera, hideForm } = this.props
    getUserVals(values)
    showCamera()
  }
  render(){
    const title = 'User Data'
    const { qr, cameraVisibility } = this.props
    console.log(qr)
    return (
      <ScrollLock>
        <Title title={title}/>
        <UserDataForm onSubmit={this.submit}/>
      </ScrollLock>
    )
  }
}

export default connect(mapState, mapDispatch)(BasicUserData)
