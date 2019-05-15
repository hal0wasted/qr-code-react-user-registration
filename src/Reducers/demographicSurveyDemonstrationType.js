import Types from '../Actions/DemographicTypes'

const demographicSurveyDemonstrationType = (slice = '', action) => {
  switch (action.type){
    case Types.SET_DEMOGRAPHIC_SURVEY_DEMONSTRATION_TYPE: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default demographicSurveyDemonstrationType
