import { SET_FILTER } from './../constants';

export default function(state = {}, action) {  
  switch (action.type) {
    case SET_FILTER: 
      return {...action.filter};
    default:
      return state;
  }
};