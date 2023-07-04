import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Define action types
const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';
const ADD_DESTINATION = 'ADD_DESTINATION';

// Action creator for getting data
const fetchDestinations = () => ({
    type: FETCH_DESTINATIONS,
});

// Action creator for new destination
const addDestination = (destination) => ({
    type: ADD_DESTINATION,
    payload: destination,
});

// Saga for calling API
function* fetchDestinationsSaga() {
    try {
        const response = yield call(axios.get, 'https://6436d35a3e4d2b4a12dcb9a2.mockapi.io/api/v1/destinations');
        const destinations = response.data;
        yield put({ type: 'FETCH_DESTINATIONS_SUCCESS', payload: destinations });
    } catch (error) {
        yield put({ type: 'FETCH_DESTINATIONS_ERROR', payload: error.message });
    }
}

// Saga for adding new destination
function* addDestinationSaga(action) {
    try {
        const response = yield call(axios.post, 'https://6436d35a3e4d2b4a12dcb9a2.mockapi.io/api/v1/destinations', action.payload);
        const newDestination = response.data;
        yield put({ type: 'ADD_DESTINATION_SUCCESS', payload: newDestination });
    } catch (error) {
        yield put({ type: 'ADD_DESTINATION_ERROR', payload: error.message });
    }
}

// Watcher saga để theo dõi các action và gọi saga tương ứng
function* rootSaga() {
    yield takeEvery(FETCH_DESTINATIONS, fetchDestinationsSaga);
    yield takeEvery(ADD_DESTINATION, addDestinationSaga);
}

export { fetchDestinations, addDestination, rootSaga };
