import React from 'react';
import { Route } from 'react-router-dom';

import './NoteCard.css';

class NoteCard extends React.Component {
  render() {
    
    const notes = this.props;
    
    return (

        <div className="NoteCard">
            <div className="notecard-title">
                <h2>{notes.name}</h2>
            
                <p>{notes.modified}</p>
           </div>
            <div className="notecard-button-box">
                <button>
                    Delete
                </button>
            </div>
      

        </div>
      );

    }
  
}

export default NoteCard;
