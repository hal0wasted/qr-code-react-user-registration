import Types from './Types'

// export const test = { type: Types.TEST }

const Actions = {
  scan: data => ({ type: Types.SCAN, payload: data }),
  getUserVals: values => ({ type: Types.USER_VALUES, payload: values }),
  showCamera: { type: Types.SHOW_CAMERA, payload: 'visible' },
  hideCamera: { type: Types.HIDE_CAMERA, payload: 'hidden' }
}

export default Actions
