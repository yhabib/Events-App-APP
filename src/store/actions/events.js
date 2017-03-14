import { SET_EVENTS, BASE_URL } from './../constants';


/////////////////////////
// - action creators - //
/////////////////////////

function setEvents(events) {    
  return { type: SET_EVENTS, events }
}




/////////////////////////
// - action functions - //
/////////////////////////

// need to use thuk in order to convert this function into an object that
// will be understable for the reducer
export const fetchEvents = (data) => (dispatch) => {    
  const url = `${BASE_URL}/events`;
  return fetch(url)
    .then(res => res.json())
    .then(events => {
      console.log(events);
      // dispatch(action);
    });
    // .catch(err => console.log(err));
}