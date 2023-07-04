// reducers.js
import { combineReducers } from 'redux';

const initialState = {
    destinations: [],
};

const destinationsReducer = (state = initialState.destinations, action) => {
    switch (action.type) {
        case 'FETCH_DESTINATIONS_SUCCESS':
            return action.payload;
        case 'ADD_DESTINATION_SUCCESS':
            return [...state, action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    destinations: destinationsReducer,
});

export default rootReducer;
