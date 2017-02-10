import reducer from './reducers/root-reducer.js';
import {createStore, applyMiddleware} from 'redux'; 
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk'; 


const reduxLogger = createLogger(); 

const store = createStore(reducer, applyMiddleware(reduxLogger, thunkMiddleware)); 

export default store; 
