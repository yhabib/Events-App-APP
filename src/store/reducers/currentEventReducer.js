import { SET_CURRENT_EVENT } from './../constants';

export default function(state = {}, action) {  
  switch (action.type) {
    case SET_CURRENT_EVENT:
      return {...action.event};
    default:
      return state;
  }
};