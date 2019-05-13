import React, { Component } from 'react'
import {
  mapState,
  mapDispatch
} from '../../Actions/ActionCreators'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import _, { flow } from 'lodash'
import '../../scss/consent-form.scss'

//const { userValues } = this.props
const userValues = { firstName: 'Bill', lastName: 'Bong' }
const required = (value) => value === `${userValues.firstName} ${userValues.lastName}` ? undefined : 'Required'

class ConsentForm extends Component {
  render(){
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = mm + '/' + dd + '/' + yyyy
    return (
      <div>
        <div className='consent-form-top-spacer'></div>
        <h1>Consent Form</h1>
        <div className='consent-form-top-spacer'></div>
        <div>
          I, {userValues.firstName} {userValues.lastName}, hereby understand, acknowledge and agree to the following as a condition of and in exchange for participating in the Future Flight Controls Study on {today} (the "Activity").
        </div>
        <br></br>
        <div>
          <span>1.) </span> My participation in this Activity is voluntary, on my own time and not compensable, and I am acting under my permission and own free will. I expressly acknowledge that I am not employed by Bell Textron Inc. and this Activity is not "in the course and scope of my employment."
        </div>
        <br></br>
        <div>
          <span>2.) </span> I release all rights to any performance assessment data collected during the Activity. I acknowledge that Bell may utilize the performance assessment data to shape future flight controls.
        </div>
        <br></br>
        <div>
          <span>3.) </span> I understand that my participation may include physical and mental activity and may require some physical and mental effort. Before I engage in any activity, I have or will consult with my doctor as I deem appropriate. By participating, I warrant that I do not have any medical ailments, physical limitations, or mental disablilities that will affect my ability to safely participate in the Activity.
        </div>
        <br></br>
        <div>
          <span>4.) </span> I understand that there is potential for risks and dangers that may not be obvious or reasonably foreseeable at this time. I further understand that Bell Helicopter Textron Inc., Textron Inc. (Textron), and/or any employees of Bell or Textron cannot guarantee my safety in this or any Activity.
        </div>
        <br></br>
        <div>
          <span>5.) </span> Bell, Textron, and/or any employees of Bell or Textron undertake no direct or indirect legal or financial responsibility for my personal safety or well-being while I am participating in this Activity. I knowingly and willingly assume any and all risks.
        </div>
        <br></br>
        <div>
          <span>6.) </span> By signing the form below, I agree that I am solely responsible for my own health and safety during the Activity, and I fully release any and all claims against Bell, Textron and/or any employees of Bell or Textron for any injuries, loss or harm arising from my participation in the Activity.
        </div>
        <br></br>
        <div>
          <span>7.) </span> I understand and agree that I am 100% liable for any and all damages incurred as a result of any injury or property damage arising from, associated with and/or related to this Activity in any way.
        </div>
        <br></br>
        <div>
          <span>8.) </span> I understand that Bell will make a request for certain information from me in connection with the Activity, some of which may be Personal Data. Bell will process any Personal Data collected from you only as necessary to enable the continuous improvement and support of Bell’s products and services. Furthermore, I understand that Bell may share any data, including Personal Data, provided in connection with my participation in the Activity with a third party [Texas A&M University - Commerce] for purposes of evaluating input and results of the Activity. Bell agrees not to share your Personal Data with any other third parties outside of Bell By my signature below, I hereby acknowledge, understand and agree to the use of my Personal Data for the limited purposes described herein.
        </div>
        <br></br>
        <div>
          <span>9.) </span> In the event that any one or more of the provisions of this Agreement shall be held to be invalid, illegal, and unenforceable or in conflict with the law, the remaining portions will not be invalidated and shall remain in full force and effect in accordance with Texas law.
        </div>
        <br></br>
        <div>
          I acknowledge that I have read, understand and agree to the terms of this Release and Agreement. This Release and Agreement represents my complete understanding regarding these issues and no oral representation, statements or inducements have been made apart from what is contained in this document.
        </div>
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={ this.props.handleSubmit }>
          <div>Name: {userValues.firstName} {userValues.lastName}</div>
          <div>Date: {today}</div>
          <div>Digital Signature:&nbsp;&nbsp;&nbsp;</div>
          <div>
            <Field name="digitalSignature" component="input" type="text" validate={[required]} value=""/>
          </div>
          <button type='submit'>Submit</button>
        </form>
        <div className='consent-form-bottom-spacer'></div>
      </div>
    )
  }
}

export default flow(
  connect(mapState, mapDispatch),
  reduxForm({ form: 'consentForm' })
)(ConsentForm)
