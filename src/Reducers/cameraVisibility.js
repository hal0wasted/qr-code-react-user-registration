import Types from '../Actions/Types'

const cameraVisibility = (slice = 'hidden', action) => {
  switch (action.type){
    case Types.SHOW_CAMERA: {
      return action.payload
    }
    case Types.HIDE_CAMERA: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default cameraVisibility
