import { SET_EVENTS, URL_BASE } from './../constants';


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
export const login = (data) => (dispatch) => {    
  const myHeaders = new Headers({ 
    'Content-Type': 'application/json',
  });
  const config = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };

  return fetch(`${URL_BASE}/api/login`, config)
    .then(res => res.json())
    .then(user => {
      const action = setCurrentUser(user);
      console.log(action);
      
      dispatch(action);
    })
    .catch(err => console.log(err));
}