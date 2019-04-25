import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scanner from './scanner'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  qr: scanner,
  testResult: test,
  form: formReducer
})
