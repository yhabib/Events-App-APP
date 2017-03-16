import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import filterReducer from './filterReducer';
import currentEventReducer from './currentEventReducer';
import currentViewReducer from './currentViewReducer';

export default combineReducers({
  events: eventsReducer,
  filter: filterReducer,
  currentEvent: currentEventReducer,
  currentView: currentViewReducer,
});