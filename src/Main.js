import React from 'react';
import { Route } from 'react-router-dom';
import NOTES from './dummy-store'
import './App.css';

class Main extends React.Component {
  render() {
    return (

        <div className="App">
          
        {NOTES.notes.map(note => note.name)}
             

        </div>
      );

    }
  
}

export default Main;
