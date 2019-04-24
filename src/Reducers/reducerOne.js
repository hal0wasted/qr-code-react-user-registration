import Types from '../Actions/Types'

const reducerOne = (slice = '', action) => {
  switch (action.type){
    case Types.TEST: {
      return 'react is working!'
    }
    default: {
      return slice
    }
  }
}

export default reducerOne
