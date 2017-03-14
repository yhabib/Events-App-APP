// Store will be created here
import { createStore } from 'redux'
import AllReducer from './reducers/AllReducer.js'

import 

let store = createStore(AllReducer,defaultDate);
export default store;