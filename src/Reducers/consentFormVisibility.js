import Types from '../Actions/Types'

const consentFormVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.SHOW_CONSENT_FORM: {
      return action.payload
    }
    case Types.HIDE_CONSENT_FORM: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default consentFormVisibility
