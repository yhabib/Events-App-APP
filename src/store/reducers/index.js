import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  events: eventsReducer,
  filter: filterReducer,
  // currentEvent: currentEventReducer,
});


/*
state = {
  events: [],
  currentEvent: {},
  filter: {},
};
*/
