import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scanner from './scanner'
import getUserVals from './userVals'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  userValues: getUserVals,
  qr: scanner,
  testResult: test,
  form: formReducer
})
