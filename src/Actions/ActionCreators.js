import { test, scan } from './Actions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps
export const mapDispatch = dispatch => ({
  test: () => { dispatch(test) },
  scan: (data) => { dispatch(scan(data)) }
})
