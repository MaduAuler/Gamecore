
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import communitiesReducer from '../reducers/communities'
import membersReducer from "../reducers/members"

import thunk from 'redux-thunk'
import myProfileReducer from '../reducers/myprofile'

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

  communities:{
      stock: []
  },

  members:{
    stock: []
  },

  myProfile:{
    stock: []
  },

}

const bigReducer = combineReducers({
  communities: communitiesReducer,
 members: membersReducer,
 myProfile: myProfileReducer
})

const configureStore = createStore(
  bigReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore