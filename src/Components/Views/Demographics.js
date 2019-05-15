import React, { Component } from 'react'
import Title from '../Subcomponents/Title'
import DemographicDataForm from '../Forms/DemographicDataForm'
import { connect } from 'react-redux'
import { mapDemoState, mapDemoDispatch } from '../../Actions/DemographicSurveyActionCreators'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import _, { flow } from 'lodash'
import {
  protocol,
  host,
  port
} from '../../../config'
import axios from 'axios'

class Demographics extends Component {
  submit = async (values) => {
    console.log( values )
    // process data
    const { qr, hideDemoSurvey } = this.props
    let data = {
      Q1: values.Q1,
      Q2: values.Q2,
      Q2_SelfResponse: values["Q2-selfResponseBox"],
      Q3: values.Q3,
      Q3_SelfResponse: values["Q3-selfResponseBox"],
      Q4: values.Q4,
      Q5: values.Q5,
      Q6: values.Q6,
      Q7: values.Q7,
      Q8: values.Q8,
      Q9: values.Q9,
      Q10: values.Q10,
      Q11: values.Q11.join(),
      Q12: values.Q12.join(),
      Q12a: values.Q12a ? values.Q12a : null,
      Q13: values.Q13.join(),
      Q13a: values.Q13a ? values.Q13a : null,
      Q13b: values.Q13b ? values.Q13b : null,
      Q13c: values.Q13c ? values.Q13c : null,
      Q13d: values.Q13d ? values.Q13d.join() : null,
      Q14: values.Q14,
      Q14a: values.Q14a ? values.Q14a : null,
      Q14b: values.Q14b ? values.Q14b : null,
      Q14c: values.Q14c ? values.Q14c : null,
      Q15: values.Q15,
      Q16: values.Q16,
      Q17: values.Q17,
      qr: qr
    }
    try {
      // now submit demographic survey values to Express route
      const response = await axios.post(`${protocol}://${host.getCurrent()}:${port}/demographicSurveySubmit`, { data:data })
      if (response.data.message === 'ok'){
        hideDemoSurvey()
      }
    }catch(err){
      console.log(err)
    }
  }
  render(){
    const title = 'Demographic Survey'
    return (
      <div>
        <Title title={title}/>
        <DemographicDataForm onSubmit={this.submit}/>
      </div>
    )
  }
}

export default flow(
  connect(mapDemoState, mapDemoDispatch),
  connect(mapState, mapDispatch)
)(Demographics)
