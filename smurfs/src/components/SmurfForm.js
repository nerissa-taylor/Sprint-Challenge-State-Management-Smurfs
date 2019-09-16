import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions/';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: 0,
        height: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateSmurf = () => {
        const { name, age, height } = this.state
        this.props.addNewSmurf({ name, age: Number(age), height })

    }


    render() {
        // console.log('state',this.state)
        return (
            <div>


                <input
                    className="name-input"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    className="age-input"
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <input
                    className="height-input"
                    type="text"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <button onClick={this.updateSmurf}>Update Smurf</button>
                {this.props.error ? <p>Error!</p> : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        error: state.error
    };
};



export default connect(mapStateToProps, { addNewSmurf })(SmurfForm);


