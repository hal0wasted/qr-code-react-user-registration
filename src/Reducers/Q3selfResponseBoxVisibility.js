import Types from '../Actions/DemographicTypes'

const Q3_selfResponseBoxVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q3_SHOW_SELF_RESPONSE_BOX: {
      return action.payload
    }
    case Types.Q3_HIDE_SELF_RESPONSE_BOX: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default Q3_selfResponseBoxVisibility
