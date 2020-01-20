import React from 'react';
import NotefulContext from './NotefulContext';
import { noteCompare } from './helperFunctions';
import { Route } from 'react-router-dom';

import './NoteCard.css';

class Note extends React.Component {
    static contextType = NotefulContext;
    
    render() {
    
    
    const { notes } = this.context
    console.log(notes)
    const { noteId } = this.props.match.params
    console.log(noteId)

    const note = noteCompare(notes, noteId)

    console.log(note)
    
    return (
        <div>
        <div className="NoteCard">
            <div className="notecard-title">
                <h2>{note.name}</h2>
            
                <p>{note.modified}</p>
           </div>
            <div className="notecard-button-box">
                <button>
                    Delete
                </button>
            </div>
            </div>
            <div className="note_content">
                {note.content}
            </div>
      

        </div>
        
      );

    }
  
}

export default Note;