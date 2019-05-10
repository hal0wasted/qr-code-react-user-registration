import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scanner from './scanner'
import getUserVals from './userVals'
import cameraVisibility from './cameraVisibility'
import userRegisteredPopUpVisibility from './userRegisteredPopUpVisibility'
import Q2_selfResponseBoxVisibility from './Q2selfResponseBoxVisibility'
import Q3_selfResponseBoxVisibility from './Q3selfResponseBoxVisibility'
import Q12a_visibility from './Q12a_visibility'
import {
  Q13a_visibility,
  Q13b_visibility,
  Q13c_visibility,
  Q13d_visibility
} from './Q13abcd_visibility'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  // demographicData
  Q2_selfResponseBoxVisibility: Q2_selfResponseBoxVisibility,
  Q3_selfResponseBoxVisibility: Q3_selfResponseBoxVisibility,
  Q12a_visibility: Q12a_visibility,
  Q13a_visibility: Q13a_visibility,
  Q13b_visibility: Q13b_visibility,
  Q13c_visibility: Q13c_visibility,
  Q13d_visibility: Q13d_visibility,
  //
  userRegisteredPopUpVisibility: userRegisteredPopUpVisibility,
  cameraVisibility: cameraVisibility,
  userValues: getUserVals,
  qr: scanner,
  form: formReducer
})
