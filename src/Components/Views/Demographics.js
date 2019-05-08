import React, { Component } from 'react'
import Title from '../Subcomponents/Title'
import DemographicDataForm from '../Forms/DemographicDataForm'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/DemographicSurveyActionCreators'

class Demographics extends Component {
  render(){
    const title = 'Demographic Survey'
    return (
      <div>
        <Title title={title}/>
        <DemographicDataForm/>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(Demographics)
