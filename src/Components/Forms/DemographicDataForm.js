import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/demographic-data-form.scss'
import { connect } from 'react-redux'
import _, { flow } from 'lodash'
import { mapState, mapDispatch } from '../../Actions/DemographicSurveyActionCreators'
import CheckboxGroup from './CheckboxGroup'

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
    const Q11_options = [
      {id:1, name:'a.) I do not have a license'},
      {id:2, name:'b.) Driver\'s license'},
      {id:3, name:'c.) Commercial driver\'s license'},
      {id:4, name:'d.) Prefer not to respond'}
    ]
    const Q12_options = [
      {id:1, name:'a.) No experience'},
      {id:2, name:'b.) A taxicab company'},
      {id:3, name:'c.) Delivery driver'},
      {id:4, name:'d.) Peer-to-peer ridesharing (e.g. Uber, Lyft, Sidecar, etc)'},
      {id:5, name:'e.) Package delivery (e.g. FedEx, UPS, USPS, etc)'},
      {id:6, name:'f.) Over-the-road (OTR)(i.e. long haul trucking)'},
      {id:7, name:'g.) Prefer not to respond'}
    ]
    return (
      <div>
      <div style={{ marginTop:'2em' }}></div>
      <form onSubmit={ this.props.handleSubmit }>
        <div>
          <label htmlFor="Q1">
            <h3>What is your age?</h3>
          </label>
          <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
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
        <div>
          <label htmlFor="Q5">
            <h3>What is your marital status?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="single never married"/><span>a.) Single, never married</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="married or domestic partnership"/><span>b.) Married or domestic partnership</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="widowed"/><span>c.) Widowed</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="separated"/><span>d.) Separated</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="divorced"/><span>e.) Divorced</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q5" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>f.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q6">
            <h3>What is your annual income?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="less than $20,000"/><span>a.) Less than $20,000</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$20,000 to $34,999"/><span>b.) $20,000 to $34,999</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$35,000 to $49,999"/><span>c.) $35,000 to $49,999</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$50,000 to $74,999"/><span>d.) $50,000 to $74,999</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$75,000 to $99,999"/><span>e.) $75,000 to $100,000</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$100,000 to $149,999"/><span>f.) $100,000 to $149,999</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="$150,000 to $249,999"/><span>g.) $150,000 to $249,999</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="over $250,000"/><span>h.) over $250,000</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q6" component="input" type="radio" validate={[required]} value="Prefer not to respond"/><span>i.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q7">
            <h3>In what zip code do you live?</h3>
          </label>
          <div>
            <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
              <label><Field name="Q7" component="input" type="text" validate={[required]} value=""/></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q8">
            <h3>Do you speak a language other than English?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q8" component="input" type="radio" validate={[required]} value="conversationally"/><span>a.) Conversationally</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q8" component="input" type="radio" validate={[required]} value="fluently"/><span>b.) Fluently</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q8" component="input" type="radio" validate={[required]} value="no"/><span>c.) No</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q8" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>d.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q9">
            <h3>What is your occupational field?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="management"/><span>a.) Management (e.g. business, finance, management)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="professional"/><span>b.) Professional (e.g. computer, engineering, legal, healthcare practitioners)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="service"/><span>c.) Service (e.g. healthcare support, protective services, food preparation, personal care, building/grounds)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="sales"/><span>d.) Sales (e.g. sales, customer service, office administration)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="natural resources and construction"/><span>e.) Natural resources and construction (e.g. agriculture, construction, installation, repair)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="production and transportation"/><span>f.) Production and transportation (e.g. factory, commercial transportation, material moving)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="retired"/><span>g.) Retired</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q9" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>h.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q10">
            <h3>What is your employment status?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q10" component="input" type="radio" validate={[required]} value="unemployed"/><span>a.) Unemployed</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q10" component="input" type="radio" validate={[required]} value="not in labor force"/><span>b.) Not in labor force (e.g. retired, homemaker, etc.)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q10" component="input" type="radio" validate={[required]} value="employed part-time"/><span>c.) Employed part-time (less than 30 hrs/wk)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q10" component="input" type="radio" validate={[required]} value="employed full-time"/><span>d.) Employed full-time (30 hrs or more/wk)</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q10" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>e.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q11">
            <h3>What driving certifications / license have you completed?</h3>
          </label>
          <div>
            <div className="question-option">
              <Field name="Q11" component={CheckboxGroup} options={Q11_options} validate={[required]}/>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q12">
            <h3>12.	Do you or have you ever operated a motor vehicle for hire in the following (select all that apply):</h3>
          </label>
          <div>
            <div className="question-option">
              <Field name="Q12" component={CheckboxGroup} options={Q12_options} validate={[required]}/>
            </div>
          </div>
        </div>


        <div style={{ marginBottom:'60px' }}></div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginBottom:'120px' }}></div>
      </div>
    )
  }
}

export default flow(
  reduxForm({ form: 'demographicData' }),
  connect(mapState, mapDispatch)
)(DemographicDataForm)
