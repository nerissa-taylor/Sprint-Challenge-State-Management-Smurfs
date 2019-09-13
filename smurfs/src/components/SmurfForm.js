import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions/index;'

const SmurfForm = props => {

    return
    <div>
        addNewSmurf= e => {
            e.preventDefault()



        };
         const handleChanges = e => {
            addNewSmurf(e.target.value)
        };
         <input
            type="text"
            value={props.smurf.name}
            onChange={props.handleChanges}
            placeholder="Add new smurf"
        />
        <button onClick={props.addNewSmurf}>Add Smurf</button>


    </div>
}
export default connect(null, { addNewSmurf })(SmurfForm);
