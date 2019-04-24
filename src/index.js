import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './Reducers/RootReducer'
import App from './Components/App'
import './index.scss'

// inject some initial DOM into our HTML before letting React takeover
let root = document.createElement('div')
document.body.appendChild(root)
root.id = 'root'

// Redux Store
const store = createStore(RootReducer)
store.subscribe(() => {
  console.log(store.getState())
})
console.log(store.getState())

// Render
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)
