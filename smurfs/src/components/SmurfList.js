import React from 'react';

import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';

const addNewSmurf = props => {

    return (


        <li>

            <button className="button" onClick={() => props.addNewSmurf(props.add)}>Add</button>
            {props.smurf.name}
        </li>
    );
};




export default connect(null, { getSmurf })(SmurfList);
