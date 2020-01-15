import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class Main extends React.Component {
  render() {
    console.log(this.props.notes)
    const noteList = this.props.notes.map(note => note.name)
    
    return (

        <div className="Main">
        
        {noteList}
             

        </div>
      );

    }
  
}

export default Main;
