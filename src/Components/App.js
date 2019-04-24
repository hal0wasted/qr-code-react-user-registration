import React from 'react'
import {connect} from 'react-redux'
import {
  mapState,
  mapDispatch
} from '../Actions/ActionCreators'

class App extends React.Component {
  componentDidMount(){
    const { test } = this.props
    test()
  }
  render(){
    return(
      <React.Fragment>
        <div></div>
      </React.Fragment>
    )
  }
}

// connect our React component and export the connected component for use
const connectedComponent = connect(mapState, mapDispatch)(App)

export default connectedComponent
