import React, { Component } from 'react'
import UserDataForm from '../Forms/UserDataForm'
import '../../scss/user-data-view.scss'

class BasicUserData extends Component {
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  submit(values){
    console.log(values)
  }
  render(){
    const title = 'User Data'
    return (
      <div>
        <div className='user-data-view-title'>{title}</div>
        <UserDataForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default BasicUserData
