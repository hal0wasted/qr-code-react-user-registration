import Types from '../Actions/Types'

const userRegisteredPopUpVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.SHOW_USER_REGISTERED_POP_UP: {
      return action.payload
    }
    case Types.HIDE_USER_REGISTERED_POP_UP: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default userRegisteredPopUpVisibility
