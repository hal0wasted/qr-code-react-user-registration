import React, { Component } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import Title from '../Subcomponents/Title'
import { withRouter } from 'react-router'

class BasicUserData extends Component {
  submit = values => {
    const { history } = this.props
    console.log(values)
    history.push('/QrReader')
  }
  render(){
    const title = 'User Data'
    return (
      <div>
        <Title title={title}/>
        <UserDataForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default withRouter(BasicUserData)
