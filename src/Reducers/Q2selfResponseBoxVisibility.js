import Types from '../Actions/DemographicTypes'

const Q2_selfResponseBoxVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q2_SHOW_SELF_RESPONSE_BOX: {
      return action.payload
    }
    case Types.Q2_HIDE_SELF_RESPONSE_BOX: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default Q2_selfResponseBoxVisibility
