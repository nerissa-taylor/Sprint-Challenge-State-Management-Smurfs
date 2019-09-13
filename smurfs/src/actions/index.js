import axios from 'axios';
export const FETCH_SMURFS_GET_DATA = 'GET_DATA';
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
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
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
            .then(rez => dispatch({ type: FETCH_SMURFS_SEND_SMURF, payload: rez.data }))
            .catch(err => console.log(err))
    }
};

export const addNewSmurf = newSmurf => {
    console.log(newSmurf);
    return {
        type: ADD_SMURF,
        payload: newSmurf
    };
}