import { test } from './Actions'

// mapStateToProps
export const mapState = state => ({
  ...state
})

// mapDispatchToProps
export const mapDispatch = dispatch => ({
  test: ()=>{ dispatch(test) }

})
