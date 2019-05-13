import Types from './Types'

// export const test = { type: Types.TEST }

const Actions = {
  scan: data => ({ type: Types.SCAN, payload: data }),
  getUserVals: values => ({ type: Types.USER_VALUES, payload: values }),
  showCamera: { type: Types.SHOW_CAMERA, payload: 'visible' },
  hideCamera: { type: Types.HIDE_CAMERA, payload: 'hidden' },
  showUserRegisteredPopUp: { type: Types.SHOW_USER_REGISTERED_POP_UP, payload: 'visible' },
  hideUserRegisteredPopUp: { type: Types.HIDE_USER_REGISTERED_POP_UP, payload: 'hidden' },
  showDemoSurvey: { type: Types.SHOW_DEMO_SURVEY, payload: 'visible' },
  hideDemoSurvey: { type: Types.HIDE_DEMO_SURVEY, payload: 'hidden' }
}

export default Actions
