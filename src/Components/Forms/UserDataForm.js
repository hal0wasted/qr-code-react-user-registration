import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/user-data-form.scss'

class UserDataForm extends Component {
  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First&nbsp;&nbsp;</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last&nbsp;&nbsp;</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'userData'
})(UserDataForm)
