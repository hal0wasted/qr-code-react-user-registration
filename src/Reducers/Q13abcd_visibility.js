import Types from '../Actions/DemographicTypes'

export const Q13a_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q13_SHOW_Q13A: {
      return action.payload
    }
    case Types.Q13_HIDE_Q13A: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export const Q13b_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q13_SHOW_Q13B: {
      return action.payload
    }
    case Types.Q13_HIDE_Q13B: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export const Q13c_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q13_SHOW_Q13C: {
      return action.payload
    }
    case Types.Q13_HIDE_Q13C: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export const Q13d_visibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.Q13_SHOW_Q13D: {
      return action.payload
    }
    case Types.Q13_HIDE_Q13D: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}
