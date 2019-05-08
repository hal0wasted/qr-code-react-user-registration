import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/demographic-data-form.scss'
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
      <div>
      <div style={{ marginTop:'2em' }}></div>
      <form onSubmit={ this.props.handleSubmit }>
        <div>
          <label htmlFor="Q1">
            <h3>What is your age?</h3>
          </label>
          <div className="question-option" style={{ textAlign:'center' }}>
            <Field name="Q1" component="input" type="text" validate={[required]} type="text"/>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q2">
            <h3>What is your gender?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="male"/><span>a.) Male</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="female"/><span>b.) Female</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q2_showSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="prefer to self-respond"/><span>c.) Prefer to self-respond</span></label>
            </div>
            { Q2_selfResponseBoxVisibility === 'visible' ? <div className="question-option"><Field name="Q2-selfResponseBox" component="input" type="text" validate={[required]} value=""/></div> : null }
            <div className="question-option">
              <label><Field onClick={this.Q2_hideSelfResponse} name="Q2" component="input" type="radio" validate={[required]} value="prefer to not respond"/><span>d.) Prefer to not respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q3">
            <h3>Please specify your ethnicity (or race)</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="hispanic or latino"/><span>a.) Hispanic or Latino</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="black or african-american"/><span>b.) Black or African American</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="native american or american indian"/><span>c.) Native American or American Indian</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="asian or pacific islander"/><span>d.) Asian or Pacific Islander</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="white or european"/><span>e.) White or European</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="multi-racial"/><span>f.) Multi-racial</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q3_showSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="prefer to self-respond"/><span>g.) Prefer to self-respond</span></label>
            </div>
            { Q3_selfResponseBoxVisibility === 'visible' ? <div className="question-option"><Field name="Q3-selfResponseBox" component="input" type="text" validate={[required]} value=""/></div> : null }
            <div className="question-option">
              <label><Field onClick={this.Q3_hideSelfResponse} name="Q3" component="input" type="radio" validate={[required]} value="prefer to not respond"/><span>h.) Prefer to not respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q4">
            <h3>What is the highest degree or level of school you have completed?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="no schooling completed"/><span>a.) No schooling completed</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="8th grade"/><span>b.) 8th grade</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="some high school no diploma"/><span>c.) Some High School, no diploma</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="high school graduate or GED"/><span>d.) High school graduate or GED</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="some college or university no degree"/><span>e.) Some College/University, no degree</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="trade or technical or vocational training"/><span>f.) Trade/Technical/Vocational training</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="associate degree"/><span>g.) Associate degree (e.g. AA, AS)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="bachelors degree"/><span>h.) Bachelor's degree (e.g. BA, BS)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="masters degree"/><span>i.) Master's degree (e.g. MA, MS, Med)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="professional terminal degree"/><span>j.) Professional terminal degree (e.g. MD, DDS, DVM, JD)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="doctorate degree"/><span>k.) Doctorate degree (e.g. PhD, EdD)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q4" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>l.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default flow(
  reduxForm({ form: 'demographicData' }),
  connect(mapState, mapDispatch)
)(DemographicDataForm)
