import Types from '../Actions/DemographicTypes'

export const Q14a_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q14_SHOW_Q14A: {
      return action.payload
    }
    case Types.Q14_HIDE_Q14A: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export const Q14b_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q14_SHOW_Q14B: {
      return action.payload
    }
    case Types.Q14_HIDE_Q14B: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export const Q14c_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q14_SHOW_Q14C: {
      return action.payload
    }
    case Types.Q14_HIDE_Q14C: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}
