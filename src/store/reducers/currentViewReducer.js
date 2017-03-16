import { SET_CURRENT_VIEW } from './../constants';

export default function(state = 'grid', action) {  
  switch (action.type) {
    case SET_CURRENT_VIEW:
      console.log(action.view);
      return action.view;
    default:
      return state;
  }
};