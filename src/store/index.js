import { hashHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from '../reducers'

export const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk, promise),
    applyMiddleware(routerMiddleware(hashHistory)),
  ),
)

export const history = syncHistoryWithStore(hashHistory, store)
