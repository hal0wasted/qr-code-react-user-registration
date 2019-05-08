import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/user-data-form.scss'
import { connect } from 'react-redux'
import _, { flow } from 'lodash'
import { mapState, mapDispatch } from '../../Actions/DemographicSurveyActionCreators'

const required = value => value ? undefined : 'Required'

class DemographicDataForm extends Component {
  Q2_showSelfResponse = () => {
    const { Q2_showSelfResponseBox } = this.props
    Q2_showSelfResponseBox()
  }
  Q2_hideSelfResponse = () => {
    const { change, Q2_hideSelfResponseBox } = this.props
    Q2_hideSelfResponseBox()
    change('Q2-selfResponseBox', null)
  }
  Q3_showSelfResponse = () => {
    const { Q3_showSelfResponseBox } = this.props
    Q3_showSelfResponseBox()
  }
  Q3_hideSelfResponse = () => {
    const { change, Q3_hideSelfResponseBox } = this.props
    Q3_hideSelfResponseBox()
    change('Q3-selfResponseBox', null)
  }
  render(){
    const {
      handleSubmit,
      Q2_selfResponseBoxVisibility,
      Q3_selfResponseBoxVisibility
    } = this.props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="Q1">What is your age?</label>
          <Field name="Q1" component="input" type="text" validate={[required]} type="text"/>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q2">What is your gender?</label>
          <div>
            <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="male"/>a.) Male</label>
            <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="female"/>b.) Female</label>
            <label><Field onClick={this.Q2_showSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="prefer to self-respond"/>c.) Prefer to self-respond</label>
            { Q2_selfResponseBoxVisibility === 'visible' ? <Field name="Q2-selfResponseBox" component="input" type="text" validate={[required]} value=""/> : null }
            <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="prefer to not respond"/>d.) Prefer to not respond</label>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q3">Please specify your ethnicity (or race)</label>
          <div>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="hispanic or latino"/>a.) Hispanic or Latino</label>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="black or african-american"/>b.) Black or African American</label>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="native american or american indian"/>c.) Native American or American Indian</label>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="asian or pacific islander"/>d.) Asian or Pacific Islander</label>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="white or european"/>e.) White or European</label>
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="multi-racial"/>f.) Multi-racial</label>
            <label><Field onClick={this.Q3_showSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="prefer to self-respond"/>g.) Prefer to self-respond</label>
            { Q3_selfResponseBoxVisibility === 'visible' ? <Field name="Q3-selfResponseBox" component="input" type="text" validate={[required]} value=""/> : null }
            <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="prefer to not respond"/>h.) Prefer to not respond</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default flow(
  reduxForm({ form: 'demographicData' }),
  connect(mapState, mapDispatch)
)(DemographicDataForm)
