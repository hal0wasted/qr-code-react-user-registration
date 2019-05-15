import Actions from './DemographicActions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps -- be sure to always pass the argument into the inner function call
// ..or you will get a middleware error
export const mapDispatch = dispatch => ({
  test: () => { dispatch(Actions.test) },
  setDemographicSurveyDemonstrationType: (data) => { dispatch(Actions.setDemographicSurveyDemonstrationType(data)) },
  Q2_showSelfResponseBox: () => { dispatch(Actions.Q2_showSelfResponseBox()) },
  Q2_hideSelfResponseBox: () => { dispatch(Actions.Q2_hideSelfResponseBox()) },
  Q3_showSelfResponseBox: () => { dispatch(Actions.Q3_showSelfResponseBox()) },
  Q3_hideSelfResponseBox: () => { dispatch(Actions.Q3_hideSelfResponseBox()) },
  Q12_showQ12a: () => { dispatch(Actions.Q12_showQ12a()) },
  Q12_hideQ12a: () => { dispatch(Actions.Q12_hideQ12a()) },
  Q13_showQ13a: () => { dispatch(Actions.Q13_showQ13a()) },
  Q13_hideQ13a: () => { dispatch(Actions.Q13_hideQ13a()) },
  Q13_showQ13b: () => { dispatch(Actions.Q13_showQ13b()) },
  Q13_hideQ13b: () => { dispatch(Actions.Q13_hideQ13b()) },
  Q13_showQ13c: () => { dispatch(Actions.Q13_showQ13c()) },
  Q13_hideQ13c: () => { dispatch(Actions.Q13_hideQ13c()) },
  Q13_showQ13d: () => { dispatch(Actions.Q13_showQ13d()) },
  Q13_hideQ13d: () => { dispatch(Actions.Q13_hideQ13d()) },
  Q14_showQ14a: () => { dispatch(Actions.Q14_showQ14a()) },
  Q14_hideQ14a: () => { dispatch(Actions.Q14_hideQ14a()) },
  Q14_showQ14b: () => { dispatch(Actions.Q14_showQ14b()) },
  Q14_hideQ14b: () => { dispatch(Actions.Q14_hideQ14b()) },
  Q14_showQ14c: () => { dispatch(Actions.Q14_showQ14c()) },
  Q14_hideQ14c: () => { dispatch(Actions.Q14_hideQ14c()) }
})
