import { createStore } from 'redux';
import counterReducer from './counterReducer';

// Create the Redux store
const store = createStore(counterReducer);

export default store;
