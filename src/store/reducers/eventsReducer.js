import { SET_EVENTS } from './../constants';

export default function(state = [], action) {  
  switch (action.type) {
    case SET_EVENTS:
      console.log(action.events);
      return state;
    default:
      return state;
  }
};