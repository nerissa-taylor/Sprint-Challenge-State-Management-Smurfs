import React, { useEffect } from 'react';


import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

const SmurfList = props => {

    const Smurfs = ({ getSmurfs, smurf, isFetching, error }) => {
        useEffect(() => {
            // run action creator when the component mounts
            getSmurfs();
        }, [getSmurfs]);

        if (isFetching) {
            return <h2>Fetching smurf for ya!</h2>;
        }

        return (
            <>
                <h2>Papa Smurfs called : {smurf}</h2>
                <button onClick={getSmurfs}>Get new Smurf</button>
            </>
        );
    };

    const mapStateToProps = state => {
        return {
            smurf: state.smurf,
            isFetching: state.isFetching,
            error: state.error
        };
    };
}
export default connect(mapStateToProps, { getSmurfs })(SmurfList)