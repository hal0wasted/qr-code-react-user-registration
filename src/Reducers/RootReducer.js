import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import test from './reducerOne'
import scan from './scanner'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  scan: scan,
  test: test,
  form: formReducer
})
