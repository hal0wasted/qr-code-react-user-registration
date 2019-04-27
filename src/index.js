import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import App from './Components/App'
import WebFont from 'webfontloader'
import injectDom from './modules/injectDom'
import './index.scss'

init()

function init(){
  injectDom(`Bell Pilot Data`)

  // Redux Store
  const store = createStore(rootReducer)
  console.log(store.getState())
  store.subscribe(() => {
    console.log(store.getState())
  })

  // Render
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('#root')
  )
}
