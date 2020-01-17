import React from 'react';
import { Route } from 'react-router-dom';

import './NoteCard.css';

class Note extends React.Component {
  render() {
    
    const notes = this.props;
    console.log(notes.notes.name)
    
    return (
        <div>
        <div className="NoteCard">
            <div className="notecard-title">
                <h2>{notes.notes.name}</h2>
            
                <p>{notes.notes.modified}</p>
           </div>
            <div className="notecard-button-box">
                <button>
                    Delete
                </button>
            </div>
            </div>
            <div className="note_content">
                {notes.notes.content}
            </div>
      

        </div>
        
      );

    }
  
}

export default Note;