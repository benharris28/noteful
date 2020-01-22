import React from 'react';
import NotefulContext from '../NotefulContext';
import { noteCompare } from '../helperFunctions';
import { Route } from 'react-router-dom';



class Note extends React.Component {
    static contextType = NotefulContext;
    
    handleDeleteNote = noteId => {
        this.props.history.push(`/`)
    }
    
    render() {
    
    
    const { notes } = this.context
    const { noteId } = this.props.match.params
  

    const note = noteCompare(notes, noteId)
    
   
    
    return (
       
        <div className="NotePageMain">
            <div className="notecard-title">
                <Note 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
                    />
           </div>
            
           
            <div className="note_content">
                {note.content}
            </div>
      

        </div>
        
      );

    }
  
}

export default Note;