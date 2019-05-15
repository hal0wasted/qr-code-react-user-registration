import Actions from './Actions'
import { reset } from 'redux-form'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps -- be sure to always pass the argument into the inner function call
// ..or you will get a middleware error
export const mapDispatch = dispatch => ({
  test: () => { dispatch(Actions.test) },
  scan: (data) => { dispatch(Actions.scan(data)) },
  getUserVals: (values) => { dispatch(Actions.getUserVals(values)) },
  showCamera: () => { dispatch(Actions.showCamera) },
  hideCamera: () => { dispatch(Actions.hideCamera) },
  showUserRegisteredPopUp: () => { dispatch(Actions.showUserRegisteredPopUp) },
  hideUserRegisteredPopUp: () => { dispatch(Actions.hideUserRegisteredPopUp) },
  showDemoSurvey: () => { dispatch(Actions.showDemoSurvey) },
  hideDemoSurvey: () => {
    dispatch(Actions.hideDemoSurvey)
    dispatch( reset('demographicData') )
  },
  showConsentForm: () => { dispatch(Actions.showConsentForm) },
  hideConsentForm: () => { dispatch(Actions.hideConsentForm) }
})
