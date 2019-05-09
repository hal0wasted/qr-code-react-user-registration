import Types from '../Actions/DemographicTypes'

const Q12a_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q12_SHOW_Q12A: {
      return action.payload
    }
    case Types.Q12_HIDE_Q12A: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default Q12a_visibility
