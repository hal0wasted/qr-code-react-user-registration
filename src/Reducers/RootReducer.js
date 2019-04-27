import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scanner from './scanner'
import getUserVals from './userVals'
import cameraVisibility from './cameraVisibility'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  cameraVisibility: cameraVisibility,
  userValues: getUserVals,
  qr: scanner,
  form: formReducer
})
