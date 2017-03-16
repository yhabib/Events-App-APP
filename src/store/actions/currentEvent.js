import { SET_CURRENT_EVENT, BASE_URL } from './../constants';


/////////////////////////
// - action creators - //
/////////////////////////

function setCurrentEvent(event) {    
  return { type: SET_CURRENT_EVENT, event }
}



/////////////////////////
// - action functions - //
/////////////////////////

// need to use thuk in order to convert this function into an object that
// will be understable for the reducer
export const fetchEvent = (id) => (dispatch) => {    
  const url = `${BASE_URL}/events/${id}`;

  return fetch(url)
    .then(res => res.json())
    .then(event => dispatch(setCurrentEvent(event)))
    .catch(err => console.error(err));
}