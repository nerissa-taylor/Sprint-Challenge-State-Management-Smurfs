import React, { Component } from "react";
import { connect } from 'react-redux';
import { reducer } from '../reducer/reducer';
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
function App() {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm />
    </div>
  );
}


export default connect(null, {})(App);
