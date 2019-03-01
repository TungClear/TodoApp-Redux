import {
    FETCH_DOGS_BEGIN,
    FETCH_DOGS_SUCCESS,
    FETCH_DOGS_FAILURE
} from '../actions/DogAction';

const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function dogsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOGS_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            //
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_DOGS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload.dogs
            }
        case FETCH_DOGS_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
}