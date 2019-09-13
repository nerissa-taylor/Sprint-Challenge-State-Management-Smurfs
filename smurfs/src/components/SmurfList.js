import React from 'react';

import { connect } from 'react-redux';
import { addNewSmurf } from '../actions/index';

const addNewSmurf = props => {

    return (
        <li>

            <button className="button" onClick={() => props.addNewSmurf(props.add)}>Add</button>
            {props.feature.name} (+{props.feature.price})
    </li>
    );
};




export default connect(null, { buyItem })(AdditionalFeature);
