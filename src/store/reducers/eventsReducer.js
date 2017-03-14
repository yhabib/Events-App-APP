import { SET_EVENTS } from './../constants';

export default function(state = [], action) {  
  switch (action.type) {
    case SET_EVENTS:
      return Array.from(action.events);
    default:
      return state;
  }
};