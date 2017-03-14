import {combinereducers} from 'redux';
import CurrentEventReducer from './currentEventReducer';
import EventReducer from './EventReducer';
import FilterReducer from './filterReducer';


const AllReducer=combinereducers({
    EventReducer,
    FilterReducer,
    CurrentEventReducer,
});


export default AllReducer;