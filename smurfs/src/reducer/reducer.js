import { ADD_SMURF, FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS } from '../actions/index';
const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''

};
export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_SMURFS_SUCCESS:
            console.log("anything", action.payload)
            return {
                smurfs: [...action.payload],
                isFetching: false,
                error: ''
            };

        case ADD_SMURF:
            return {
                smurfs: [...action.payload],

                error: state.error
            };

        default:
            return state;
    }
};









