import React from 'react';
import NotefulContext from '../NotefulContext';
import { noteCompare } from '../helperFunctions';
import NoteCard from '../NoteCard/NoteCard';
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
       
        <section className="Note">
            
                <NoteCard 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
                    />
          
            
           
            <div className="note_content">
                {note.content}
            </div>
      

        </section>
        
      );

    }
  
}

export default Note;