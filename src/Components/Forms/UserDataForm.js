import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/user-data-form.scss'

const required = value => value ? undefined : 'Required'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

class UserDataForm extends Component {
  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="firstName">First&nbsp;&nbsp;</label>
          <Field name="firstName" component="input" validate={[required]} type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last&nbsp;&nbsp;</label>
          <Field name="lastName" component="input" validate={[required]} type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" validate={[required, email]} type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'userData'
})(UserDataForm)
