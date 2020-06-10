// src/slices/index.js
import { combineReducers } from 'redux'

import recipesReducer from './recipes'

const rootReducer = combineReducers({
  recipes: recipesReducer,
})

export default rootReducer
