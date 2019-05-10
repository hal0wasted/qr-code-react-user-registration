import Types from './DemographicTypes'

const Actions = {
  test: data => ({ type: Types.TEST, payload: data }),
  Q2_showSelfResponseBox: () => ({ type: Types.Q2_SHOW_SELF_RESPONSE_BOX, payload: 'visible' }),
  Q2_hideSelfResponseBox: () => ({ type: Types.Q2_HIDE_SELF_RESPONSE_BOX, payload: 'hidden' }),
  Q3_showSelfResponseBox: () => ({ type: Types.Q3_SHOW_SELF_RESPONSE_BOX, payload: 'visible' }),
  Q3_hideSelfResponseBox: () => ({ type: Types.Q3_HIDE_SELF_RESPONSE_BOX, payload: 'hidden' }),
  Q12_showQ12a: () => ({ type: Types.Q12_SHOW_Q12A, payload: 'visible' }),
  Q12_hideQ12a: () => ({ type: Types.Q12_HIDE_Q12A, payload: 'hidden' }),
  Q13_showQ13a: () => ({ type: Types.Q13_SHOW_Q13A, payload: 'visible' }),
  Q13_hideQ13a: () => ({ type: Types.Q13_HIDE_Q13A, payload: 'hidden' }),
  Q13_showQ13b: () => ({ type: Types.Q13_SHOW_Q13B, payload: 'visible' }),
  Q13_hideQ13b: () => ({ type: Types.Q13_HIDE_Q13B, payload: 'hidden' }),
  Q13_showQ13c: () => ({ type: Types.Q13_SHOW_Q13C, payload: 'visible' }),
  Q13_hideQ13c: () => ({ type: Types.Q13_HIDE_Q13C, payload: 'hidden' }),
  Q13_showQ13d: () => ({ type: Types.Q13_SHOW_Q13D, payload: 'visible' }),
  Q13_hideQ13d: () => ({ type: Types.Q13_HIDE_Q13D, payload: 'hidden' }),
  Q14_showQ14a: () => ({ type: Types.Q14_SHOW_Q14A, payload: 'visible' }),
  Q14_hideQ14a: () => ({ type: Types.Q14_HIDE_Q14A, payload: 'hidden' }),
  Q14_showQ14b: () => ({ type: Types.Q14_SHOW_Q14B, payload: 'visible' }),
  Q14_hideQ14b: () => ({ type: Types.Q14_HIDE_Q14B, payload: 'hidden' }),
  Q14_showQ14c: () => ({ type: Types.Q14_SHOW_Q14C, payload: 'visible' }),
  Q14_hideQ14c: () => ({ type: Types.Q14_HIDE_Q14C, payload: 'hidden' })
}

export default Actions
