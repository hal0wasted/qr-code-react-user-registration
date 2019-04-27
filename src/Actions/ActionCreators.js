import Actions from './Actions'

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
  hideCamera: () => { dispatch(Actions.hideCamera) }
})
