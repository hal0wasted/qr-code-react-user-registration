import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import reducerOne from './reducerOne'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  reducerOne,
  form: formReducer
})
