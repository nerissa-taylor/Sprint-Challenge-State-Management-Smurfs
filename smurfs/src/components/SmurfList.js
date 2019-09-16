import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';



const SmurfList = ({ getSmurfs, smurfs, isFetching, error }) => {
    useEffect(() => {
        // run action creator when the component mounts
        getSmurfs();
    }, [getSmurfs]);

    if (isFetching) {
        return <h2>Fetching smurf for ya!</h2>;
    }

    return (
        <div>
            <h2>Papa Smurfs called </h2>
            {smurfs.map(smurf => (
                <div key={smurf.id}>
                    <p>Name: {smurf.name}</p>
                    <p>Age:{smurf.age}</p>
                    <p>Height: {smurf.height}</p>

                </div>
            ))}
        </div>
    );
};
const mapStateToProps = state => {
    console.log('state', state)
    return {
        smurfs: [...state.smurfs],
        isFetching: state.isFetching,
        error: state.error

    };
};

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList)
