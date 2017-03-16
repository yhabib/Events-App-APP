import { SET_FILTER } from './../constants';


/////////////////////////
// - action creators - //
/////////////////////////

export function setFilter(filter) {    
  return { type: SET_FILTER, filter }
}
