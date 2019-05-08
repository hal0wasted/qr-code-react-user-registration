import ScrollLock from 'react-scrollLock'
import React, { Component, PureComponent } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'

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
