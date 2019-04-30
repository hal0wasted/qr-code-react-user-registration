import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scanner from './scanner'
import getUserVals from './userVals'
import cameraVisibility from './cameraVisibility'
import userRegisteredPopUpVisibility from './userRegisteredPopUpVisibility'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  userRegisteredPopUpVisibility: userRegisteredPopUpVisibility,
  cameraVisibility: cameraVisibility,
  userValues: getUserVals,
  qr: scanner,
  form: formReducer
})
