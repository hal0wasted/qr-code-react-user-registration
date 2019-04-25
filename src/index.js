import React from 'react'
import ReactDOM from 'react-dom'
// import thunk from 'redux-thunk'
import { createStore } from 'redux'   //, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import App from './Components/App'
import WebFont from 'webfontloader'
import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom'
import './index.scss'

init()

function init(){
  // inject some initial DOM into our HTML before letting React takeover
  document.querySelector('title').innerHTML = `BELL Pilot Info`
  document.head.innerHTML += `<meta name='viewport' content='width=device-width, initial-scale=1'>`
  document.body.innerHTML += `<div id='root'></div>`

  // Redux Store
  const store = createStore(rootReducer)  //, applyMiddleware(thunk))
  console.log(store.getState())
  store.subscribe(() => {
    console.log(store.getState())
  })

  // Render
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>,
    document.querySelector('#root')
  )
}
