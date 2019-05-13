import Types from '../Actions/Types'

const demoSurveyVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.SHOW_DEMO_SURVEY: {
      return action.payload
    }
    case Types.HIDE_DEMO_SURVEY: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default demoSurveyVisibility
