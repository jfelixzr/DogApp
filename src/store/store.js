import { createStore, applyMiddleware,compose, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import {recipeReducer} from '../reducers/recipeReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
  recipe:recipeReducer,
  auth:authReducer
})

export const store = createStore(
 reducer,
 composeEnhancers(
   applyMiddleware(thunk)
 )
);
