import { test, scan, getUserVals } from './Actions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps -- be sure to always pass the argument into the inner function call
// ..or you will get a middleware error
export const mapDispatch = dispatch => ({
  test: () => { dispatch(test) },
  scan: (data) => { dispatch(scan(data)) },
  getUserVals: (values) => { dispatch(getUserVals(values)) }
})
