import Types from '../Actions/Types'

const scanner = (slice = null, action) => {
  switch (action.type){
    case Types.SCAN: {
      return action.payload
    }
    default: {
      return slice
    }
  }
}

export default scanner
