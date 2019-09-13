import React, { useState } from 'react';
import { connect } from 'redux';
import { getSmurf } from '../actions/index;'

export const SmurfForm = props => {

    return (
        <div>
            addNewSmurf = e => {
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
            <button onClick={props.getSmurf}>Add Smurf</button>

            );
        </div>
    )

