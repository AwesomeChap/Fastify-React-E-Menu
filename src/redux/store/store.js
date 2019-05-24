import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const middlewares = [thunk];

const reduxDevToolsSetup = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;