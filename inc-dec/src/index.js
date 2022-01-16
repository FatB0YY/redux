import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'

import { Provider } from 'react-redux'

import App from './components/App'

const store = createStore(reducer)
// const { dispatch, subscribe, getState } = store

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }
// const { inc, dec } = bindActionCreators(actions, dispatch)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// происходит автоматически при помощи Provider
// update()

// // срабатывает каждый раз, когда изменяется стейт. подписка
// subscribe(update)
