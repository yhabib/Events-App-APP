import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';

export default combineReducers({
  events: eventsReducer,
  // currentEvent: currentEventReducer,
  // filter: filterReducer,
});


/*
state = {
  events: {
    userName,
    avatar,
    token,
  },
  currentEvent: {},
  filter: {},
};
*/
