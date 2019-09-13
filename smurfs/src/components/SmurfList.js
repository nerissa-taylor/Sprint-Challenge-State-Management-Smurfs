import React from 'react';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

const SmurfList = props => {

    return (
        <p>hello</p>
        // smurfs.map(smurf => {
        //     return <li >{smurf.name}</li>
        // })


        // < li >

        // {/* <button className="button" onClick={() => props.getSmurf(props.add)}>Add</button> */}

        // </li >
    );
};




export default connect(null, { getSmurfs })(SmurfList);
