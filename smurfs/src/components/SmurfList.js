import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';



const SmurfList = ({ getSmurfs, smurf, isFetching, error }) => {
    useEffect(() => {
        // run action creator when the component mounts
        getSmurfs();
    }, [getSmurfs]);

    if (isFetching) {
        return <h2>Fetching smurf for ya!</h2>;
    }

    return (
        <div>
            <h2>Papa Smurfs called : {getSmurfs}</h2>
            <button onClick={getSmurfs}>Get new Smurf</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        name: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList)
