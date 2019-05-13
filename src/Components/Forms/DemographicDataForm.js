import React, { Component, Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../scss/demographic-data-form.scss'
import { connect } from 'react-redux'
import _, { flow } from 'lodash'
import { mapState, mapDispatch } from '../../Actions/DemographicSurveyActionCreators'
import CheckboxGroup from './CheckboxGroup'

// For multi-checkbox option questions, we'll need to add an additional check upon submission that says,
// If the array is empty (length of 0) then we submit 'prefer not to respond'

const required = (value) => value ? undefined : 'Required'

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
  Q12_check = () => {
    const { Q12_showQ12a } = this.props
    Q12_showQ12a()
  }
  Q12_checkException = () => {
    const { change, Q12_hideQ12a } = this.props
    Q12_hideQ12a()
    change('Q12a', null)
  }
  Q12_uncheck = () => {
    const { change, Q12_hideQ12a } = this.props
    Q12_hideQ12a()
    change('Q12a', null)
  }
  Q13_checkbox_e = () => {
    const { Q13_showQ13a } = this.props
    Q13_showQ13a()
  }
  Q13_uncheckbox_e = () => {
    const { change, Q13_hideQ13a } = this.props
    Q13_hideQ13a()
    change('Q13a', null)
  }
  Q13_checkbox_f = () => {
    const { Q13_showQ13b } = this.props
    Q13_showQ13b()
  }
  Q13_uncheckbox_f = () => {
    const { change, Q13_hideQ13b } = this.props
    Q13_hideQ13b()
    change('Q13b', null)
  }
  Q13_checkbox_g = () => {
    const { Q13_showQ13c, Q13_showQ13d } = this.props
    Q13_showQ13c()
    Q13_showQ13d()
  }
  Q13_uncheckbox_g = () => {
    const { change, Q13_hideQ13c, Q13_hideQ13d } = this.props
    Q13_hideQ13c()
    Q13_hideQ13d()
    change('Q13c', null)
    change('Q13d', null)
  }
  Q14_showQ14a = () => {
    const { Q14_showQ14a } = this.props
    Q14_showQ14a()
  }
  Q14_hideQ14a = () => {
    const { change, Q14_hideQ14a } = this.props
    Q14_hideQ14a()
    change('Q14a', null)
  }
  Q14_showQ14b = () => {
    const { Q14_showQ14b } = this.props
    Q14_showQ14b()
  }
  Q14_hideQ14b = () => {
    const { change, Q14_hideQ14b } = this.props
    Q14_hideQ14b()
    change('Q14b', null)
  }
  Q14_showQ14c = () => {
    const { Q14_showQ14c } = this.props
    Q14_showQ14c()
  }
  Q14_hideQ14c = () => {
    const { change, Q14_hideQ14c } = this.props
    Q14_hideQ14c()
    change('Q14c', null)
  }
  Q14_showAllSuboptions = () => {
    this.Q14_showQ14a()
    this.Q14_showQ14b()
    this.Q14_showQ14c()
  }
  Q14_hideAllSuboptions = () => {
    this.Q14_hideQ14a()
    this.Q14_hideQ14b()
    this.Q14_hideQ14c()
  }
  render(){
    const {
      change,
      handleSubmit,
      Q2_selfResponseBoxVisibility,
      Q3_selfResponseBoxVisibility,
      Q12a_visibility,
      Q13a_visibility,
      Q13b_visibility,
      Q13c_visibility,
      Q13d_visibility,
      Q14a_visibility,
      Q14b_visibility,
      Q14c_visibility
    } = this.props
    const Q11_options = [
      {id:1, name:'a.) I do not have a license'},
      {id:2, name:'b.) Driver\'s license'},
      {id:3, name:'c.) Commercial driver\'s license'},
      {id:4, name:'d.) Prefer not to respond'}
    ]
    const Q11_exceptions = [ 'a', 'd' ]
    const Q12_options = [
      {id:1, name:'a.) No experience'},
      {id:2, actions: { uncheck:this.Q12_uncheck, uncheckUniformly:true }, name:'b.) A taxicab company'},
      {id:3, actions: { uncheck:this.Q12_uncheck, uncheckUniformly:true }, name:'c.) Delivery driver'},
      {id:4, actions: { uncheck:this.Q12_uncheck, uncheckUniformly:true }, name:'d.) Peer-to-peer ridesharing (e.g. Uber, Lyft, Sidecar, etc)'},
      {id:5, actions: { uncheck:this.Q12_uncheck, uncheckUniformly:true }, name:'e.) Package delivery (e.g. FedEx, UPS, USPS, etc)'},
      {id:6, actions: { uncheck:this.Q12_uncheck, uncheckUniformly:true }, name:'f.) Over-the-road (OTR)(i.e. long haul trucking)'},
      {id:7, name:'g.) Prefer not to respond'}
    ]
    const Q12_exceptions = [ 'a', 'g' ]
    const Q13_options = [
      {id:1, name:'a.) Sports (e.g. working out, running, biking, basketball, etc)'},
      {id:2, name:'b.) Outdoor activities (e.g. hiking, hunting, boating, etc)'},
      {id:3, name:'c.) Arts & crafts (e.g. painting, woodworking, DIY, etc)'},
      {id:4, name:'d.) Working on motor vehicles (e.g. motorcycle, car, etc)'},
      {id:5, actions:{ check:this.Q13_checkbox_e, uncheck:this.Q13_uncheckbox_e }, name:'e.) Technical (e.g. computer programming, HAM radio, electronics, etc)'},
      {id:6, actions:{ check:this.Q13_checkbox_f, uncheck:this.Q13_uncheckbox_f }, name:'f.) Remote control aircraft / drones'},
      {id:7, actions:{ check:this.Q13_checkbox_g, uncheck:this.Q13_uncheckbox_g }, name:'g.) Video games'},
      {id:8, name:'h.) None of the above'},
      {id:9, name:'i.) Prefer not to respond'}
    ]
    const Q13_exceptions = [ 'h', 'i' ]
    const Q13d_options = [
      {id:1, name:'a.) Role playing (Call of Duty, Assassins Creed, etc.)'},
      {id:2, name:'b.) Sports (UFC3, MLB 18, NBA 2K18, etc.)'},
      {id:3, name:'c.) Simulation (Minecraft, The Sims, etc.)'},
      {id:4, name:'d.) Arcade (Candy Crush, Tetric, Donkey Kongs, etc.)'},
      {id:5, name:'e.) Augmented / Virtual Reality (Pokemon Go, House of The Dying Sun, etc.)'},
      {id:6, name:'f.) Automobile racing (Mario Kart, Grand Theft Auto, etc.)'},
      {id:7, name:'g.) Flight (X-Plane, FSX, IL-2 Sturmovik, etc.)'}
    ]
    return (
      <div>
      <div style={{ marginTop:'2em' }}></div>
      <form onSubmit={ this.props.handleSubmit }>
        <div>
          <label htmlFor="Q1">
            <h3>1. What is your age?</h3>
          </label>
          <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
            {/*<Field name="Q1" component="input" type="text" validate={[required]} type="text"/>*/}
            <input name="Q1" type="text"
              ref={ (el) => this.Q1_input = el }
              onBlur={() => {
                if (this.Q1_input === null){
                  change('Q1', undefined)
                }else{
                  change('Q1', this.Q1_input.value)
                }
              }}></input>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q2">
            <h3>2. What is your gender?</h3>
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
            <h3>3. Please specify your ethnicity (or race)</h3>
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
            <h3>4. What is the highest degree or level of school you have completed?</h3>
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
            <h3>5. What is your marital status?</h3>
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
            <h3>6. What is your annual income?</h3>
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
            <h3>7. In what zip code do you live?</h3>
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
            <h3>8. Do you speak a language other than English?</h3>
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
            <h3>9. What is your occupational field?</h3>
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
            <h3>10. What is your employment status?</h3>
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
            <h3>11. What driving certifications / license have you completed?</h3>
          </label>
          <div>
            <div className="question-option">
              <Field name="Q11" component={CheckboxGroup} options={Q11_options} validate={[required]}
                exceptions={Q11_exceptions}/>
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
              <Field name="Q12" component={CheckboxGroup} options={Q12_options} exceptions={Q12_exceptions}
                check={this.Q12_check} checkException={this.Q12_checkException} uncheck={null}
                validate={[required]}/>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {
          Q12a_visibility === 'visible'
          ?
          <div>
            <label htmlFor="Q12a">
              <h3>12a. How long did you operate a motor vehicle for hire?</h3>
            </label>
            <div>
              <div className="question-option">
                <label><Field name="Q12a" component="input" type="radio" validate={[required]} value="less than 1 year"/><span>a.) Less than 1 year</span></label>
              </div>
              <div className="question-option">
                <label><Field name="Q12a" component="input" type="radio" validate={[required]} value="between 2 and 5 years"/><span>b.) Between 2 and 5 years</span></label>
              </div>
              <div className="question-option">
                <label><Field name="Q12a" component="input" type="radio" validate={[required]} value="greater than 5 years"/><span>c.) Greater than 5 years</span></label>
              </div>
            </div>
          </div>
          : null
        }
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q13">
            <h3>13.	I participate in the following leisure activities (select all that apply):</h3>
          </label>
          <div>
            <div className="question-option">
              <Field name="Q13" component={CheckboxGroup} options={Q13_options} exceptions={Q13_exceptions}
                check={this.Q13_check} checkException={this.Q13_checkException} uncheck={this.Q13_uncheck}
                validate={[required]}/>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {
          Q13a_visibility === 'visible'
          ?
          <div>
            <label htmlFor="Q13a">
              <h3>13a. What technical hobbies do you enjoy (please specify)?</h3>
            </label>
            <div>
              <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
                <label>
                  {/*<Field name="Q13a" component="input" type="text" validate={[required]} value=""/>*/}
                  <input name="Q13a" type="text"
                    ref={ (el) => this.Q13a_input = el }
                    onBlur={() => {
                      if (this.Q13a_input === null){
                        change('Q13a', undefined)
                      }else{
                        change('Q13a', this.Q13a_input.value)
                      }
                    }}></input>
                </label>
              </div>
            </div>
          </div>
          : null
        }
        <br></br>
        <br></br>
        {
          Q13b_visibility === 'visible'
          ?
          <div>
            <label htmlFor="Q13b">
              <h3>13b. How many years have you operated remote controlled aircraft?</h3>
            </label>
            <div>
              <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
                <label>
                  {/*<Field name="Q13b" component="input" type="text" validate={[required]} value=""/>*/}
                  <input name="Q13b" type="text"
                    ref={ (el) => this.Q13b_input = el }
                    onBlur={() => {
                      if (this.Q13b_input === null){
                        change('Q13b', undefined)
                      }else{
                        change('Q13b', this.Q13b_input.value)
                      }
                    }}></input>
                </label>
              </div>
            </div>
          </div>
          : null
        }
        <br></br>
        <br></br>
        {
          Q13c_visibility === 'visible'
          ?
          <div>
          <div>
            <label htmlFor="Q13c">
              <h3>13c. How many hours per week do you play video games?</h3>
            </label>
            <div>
              <div className="question-option">
                <label><Field name="Q13c" component="input" type="radio" validate={[required]} value="less than 5 hours per week"/><span>a.) Less than 5 hours per week</span></label>
              </div>
              <div className="question-option">
                <label><Field name="Q13c" component="input" type="radio" validate={[required]} value="between 6 and 10 hours per week"/><span>b.) Between 6 and 10 hours per week</span></label>
              </div>
              <div className="question-option">
                <label><Field name="Q13c" component="input" type="radio" validate={[required]} value="greater than 10 hours per week"/><span>c.) Greater than 10 hours per week</span></label>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <label htmlFor="Q13d">
              <h3>13d.	What type of video games do you play? (select all that apply)</h3>
            </label>
            <div>
              <div className="question-option">
                <Field name="Q13d" component={CheckboxGroup} options={Q13d_options} exceptions={[]} validate={[required]}/>
              </div>
            </div>
          </div>
          </div>
          : null
        }
        <br></br>
        <br></br>
        <div>
          <label htmlFor="Q14">
            <h3>14. What is your aviation experience?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field onClick={this.Q14_hideAllSuboptions} name="Q14" component="input" type="radio" validate={[required]} value="no experience"/><span>a.) No experience</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q14_showAllSuboptions} name="Q14" component="input" type="radio" validate={[required]} value="some flight training"/><span>b.) Some flight training</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q14_showAllSuboptions} name="Q14" component="input" type="radio" validate={[required]} value="private pilot training"/><span>c.) Private pilot training</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q14_showAllSuboptions} name="Q14" component="input" type="radio" validate={[required]} value="commercial or ATP pilot license"/><span>d.) Commercial or ATP pilot license</span></label>
            </div>
            <div className="question-option">
              <label><Field onClick={this.Q14_hideAllSuboptions} name="Q14" component="input" type="radio" validate={[required]} value="prefer not to respond"/><span>e.) Prefer not to respond</span></label>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        {
          Q14a_visibility === 'visible' &&
          Q14b_visibility === 'visible' &&
          Q14c_visibility === 'visible'
          ?
          <div>
            <div>
              <label htmlFor="Q14a">
                <h3>14a. How many total simulator hours do you have?</h3>
              </label>
              <div>
                <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
                  <label>
                    {/*<Field name="Q14a" component="input" type="text" validate={[required]} value=""/>*/}
                    <input name="Q14a" type="text"
                      ref={ (el) => this.Q14a_input = el }
                      onBlur={() => {
                        if (this.Q14a_input === null){
                          change('Q14a', undefined)
                        }else{
                          change('Q14a', this.Q14a_input.value)
                        }
                      }}></input>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="Q14b">
                <h3>14b. How many total flight hours do you have?</h3>
              </label>
              <div>
                <div className="question-option" style={{ textAlign:'center', width:'50%' }}>
                  <label>
                    {/*<Field name="Q14b" component="input" type="text" validate={[required]} value=""/>*/}
                    <input name="Q14b" type="text"
                      ref={ (el) => this.Q14b_input = el }
                      onBlur={() => {
                        if (this.Q14b_input === null){
                          change('Q14b', undefined)
                        }else{
                          change('Q14b', this.Q14b_input.value)
                        }
                      }}></input>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="Q14c">
                <h3>14c. My flight experience is in:</h3>
              </label>
              <div>
                <div className="question-option">
                  <label><Field name="Q14c" component="input" type="radio" validate={[required]} value="fixed wing aircraft"/><span>a.) Fixed wing aircraft</span></label>
                </div>
                <div className="question-option">
                  <label><Field name="Q14c" component="input" type="radio" validate={[required]} value="rotary wing aircraft"/><span>b.) Rotary wing aircraft</span></label>
                </div>
                <div className="question-option">
                  <label><Field name="Q14c" component="input" type="radio" validate={[required]} value="both"/><span>c.) Both</span></label>
                </div>
              </div>
            </div>
          </div>
          : null
        }
        <div>
          <label htmlFor="Q15">
            <h3>15. Would you fly in an Air Taxi operated by a Pilot?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q15" component="input" type="radio" validate={[required]} value="yes"/><span>a.) Yes</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q15" component="input" type="radio" validate={[required]} value="no"/><span>b.) No</span></label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="Q16">
            <h3>16. Are you interested in becoming an Air Taxi Pilot?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q16" component="input" type="radio" validate={[required]} value="yes"/><span>a.) Yes</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q16" component="input" type="radio" validate={[required]} value="no"/><span>b.) No</span></label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="Q17">
            <h3>17. Would you fly in an autonomous (i.e. no pilot) Air Taxi?</h3>
          </label>
          <div>
            <div className="question-option">
              <label><Field name="Q17" component="input" type="radio" validate={[required]} value="yes"/><span>a.) Yes</span></label>
            </div>
            <div className="question-option">
              <label><Field name="Q17" component="input" type="radio" validate={[required]} value="no"/><span>b.) No</span></label>
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
  connect(mapState, mapDispatch),
  reduxForm({ form: 'demographicData' })
)(DemographicDataForm)
