import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './Reducers/RootReducer'
import App from './Components/App'
import WebFont from 'webfontloader'
import './index.scss'

init()

function init(){
  // inject some initial DOM into our HTML before letting React takeover
  let root = document.createElement('div')
  document.body.appendChild(root)
  root.id = 'root'

  // Redux Store
  const store = createStore(RootReducer)
  console.log(store.getState())
  store.subscribe(() => {
    console.log(store.getState())
  })

  // Render
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root
  )
}
