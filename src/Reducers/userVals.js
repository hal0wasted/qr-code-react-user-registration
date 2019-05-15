import Types from '../Actions/Types'

const userVals = (slice = null, action) => {
  switch (action.type){
    case Types.USER_VALUES: {
      return {
        firstName: action.payload.firstName.trim(),
        lastName: action.payload.lastName.trim(),
        email: action.payload.email
      }
    }
    default: {
      return slice
    }
  }
}

export default userVals
