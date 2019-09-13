import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf, FETCHING_SMURFS_FAILURE } from '../actions/';

const SmurfForm = props => {
    const [updateSmurf, setUpdateSmurf] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const updateSmurfs = event => {
        event.preventDefault();
        setUpdateSmurf([...updateSmurfs, updateSmurf])
    }

    const handleChanges = event => {
        setUpdateSmurf(event.target.value);
    };







    return (
        <div>
            {!isFetching ? (
                <h1 onClick={() => setIsFetching(true)}>
                    {props.name}{' '}
                </h1>
            ) : (
                    <div>
                        <input
                            className="name-input"
                            type="text"
                            name="updateSmurf"
                            value={updateSmurf}
                            onChange={handleChanges}
                        />
                        <button onClick={updateSmurf}>Update Smurf</button>
                    </div>
                )}
        </div>
    );
};


export default connect(null, { addNewSmurf })(SmurfForm);


