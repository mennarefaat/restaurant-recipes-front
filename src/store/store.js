import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import compinedReducer from './reducer/compinedReducer';

export const store = createStore(compinedReducer, composeWithDevTools(applyMiddleware(thunk)))