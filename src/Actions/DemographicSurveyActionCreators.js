import Actions from './DemographicActions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps -- be sure to always pass the argument into the inner function call
// ..or you will get a middleware error
export const mapDispatch = dispatch => ({
  test: () => { dispatch(Actions.test) },
  Q2_showSelfResponseBox: () => { dispatch(Actions.Q2_showSelfResponseBox()) },
  Q2_hideSelfResponseBox: () => { dispatch(Actions.Q2_hideSelfResponseBox()) },
  Q3_showSelfResponseBox: () => { dispatch(Actions.Q3_showSelfResponseBox()) },
  Q3_hideSelfResponseBox: () => { dispatch(Actions.Q3_hideSelfResponseBox()) }
})
