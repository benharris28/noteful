import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class NotePageSideBar extends React.Component {
  render() {
    
    
    return (

        <div className="NotePageSideBar">
        
        <button
            role='link'
            className='NotePageNav__back-button'
            >
            Go Back
        </button>
             

        </div>
      );

    }
  
}

export default NotePageSideBar;