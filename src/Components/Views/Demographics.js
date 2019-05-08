import React, { Component } from 'react'
import Title from '../Subcomponents/Title'
import DemographicDataForm from '../Forms/DemographicDataForm'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/DemographicSurveyActionCreators'

class Demographics extends Component {
  submit = (values) => {
    console.log(
      values
    )
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

export default connect(mapState, mapDispatch)(Demographics)
