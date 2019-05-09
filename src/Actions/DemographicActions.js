import Types from './DemographicTypes'

const Actions = {
  test: data => ({ type: Types.TEST, payload: data }),
  Q2_showSelfResponseBox: () => ({ type: Types.Q2_SHOW_SELF_RESPONSE_BOX, payload: 'visible' }),
  Q2_hideSelfResponseBox: () => ({ type: Types.Q2_HIDE_SELF_RESPONSE_BOX, payload: 'hidden' }),
  Q3_showSelfResponseBox: () => ({ type: Types.Q3_SHOW_SELF_RESPONSE_BOX, payload: 'visible' }),
  Q3_hideSelfResponseBox: () => ({ type: Types.Q3_HIDE_SELF_RESPONSE_BOX, payload: 'hidden' }),
  Q12_showQ12a: () => ({ type: Types.Q12_SHOW_Q12A, payload: 'visible' }),
  Q12_hideQ12a: () => ({ type: Types.Q12_HIDE_Q12A, payload: 'hidden' })
}

export default Actions
