import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions/';

const SmurfForm = props => {
    // addNewSmurf= e => {
    // e.preventDefault()




    const handleChanges = e => {
        addNewSmurf(e.target.value)
    };
    return (
        <div>

            <input
                type="text"
                // value={props.smurf.name}
                onChange={handleChanges}
                placeholder="Add new smurf"
            />
            <button onClick={props.addNewSmurf}>Add Smurf</button>


        </div>
    )
};

export default connect(null, { addNewSmurf })(SmurfForm);
