import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const FETCH_SMURFS_SEND_SMURF = 'FETCHING_SMURFS_SEND_SMURF';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios

        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data.quote });
        })
        .catch(err => {
            dispatch({
                type: FETCHING_SMURFS_FAILURE,
                payload: `${err.response.message} code: ${err.response.code}`
            });
        });
}
export const sendSmurf = creds => {
    return dispatch => {
        axios
            .post('http://localhost:3333/smurfs', creds)
            .then(res => dispatch({ type: FETCH_SMURFS_SEND_SMURF, payload: res.data }))
            .catch(err => console.log(err))
    }
};

export const addNewSmurf = newSmurf => dispatch => {
    console.log(newSmurf);
    return dispatch => ({
        type: ADD_SMURF,
        payload: newSmurf
    });
}





