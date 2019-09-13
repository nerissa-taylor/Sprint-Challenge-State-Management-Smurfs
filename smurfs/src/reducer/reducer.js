import { ADD_SMURF, FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from '../actions/index';
const initialState = {
    smurfs: {
        "name": "null",
        "age": 200,
        "height": "5cm",
        "id": 0,
        "isFetching": false,
        "error": ''
    }
};
export const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isFetching: false
            };

        case ADD_SMURF:
            return {
                ...state,
                name: state.name,
                age: state.age,
                height: state.height,
                id: state.id,
                isFetching: state.isFetching,
                error: state.error
            };

        default:
            return state;
    }
};









