import Types from '../Actions/Types'

const reducerTwo = (slice = 0, action) => {
  switch (action.type){
    case Types.ADD: {
      return slice + someCalculationHere(action.payload.a, action.payload.b)
    }
    default: {
      return slice
    }
  }
}

function someCalculationHere(a, b){
  return a + b
}

export default reducerTwo
