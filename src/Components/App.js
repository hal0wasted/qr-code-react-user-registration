import React from 'react'
import {connect} from 'react-redux'
import {
  mapState,
  mapDispatch
} from '../Actions/ActionCreators'
import BasicUserData from './Views/BasicUserData'

class App extends React.Component {
  componentDidMount(){
    const { test } = this.props
    test()
  }
  render(){
    return(
      <div>
        <BasicUserData/>

      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(App)
