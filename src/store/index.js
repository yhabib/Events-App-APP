// Store will be created here
import { createStore } from 'redux'
import AllReducer from './reducers/AllReducer.js'

export default createStore(AllReducer,defaultDate);