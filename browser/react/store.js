import reducer from './reducers/root-reducer.js';
import {createStore} from 'redux'; 

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

