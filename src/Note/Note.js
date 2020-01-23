import React from 'react';
import NotefulContext from '../NotefulContext';
import { noteCompare } from '../helperFunctions';
import NoteContent from '../NoteContent/NoteContent';
import NoteError from '../NoteError/NoteError';





class Note extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = NotefulContext;
    
    handleDeleteNote = noteId => {
        this.props.history.push(`/`)
    }
    
    render() {
    
    
    const { notes } = this.context
    const { noteId } = this.props.match.params
  

    const note = noteCompare(notes, noteId) || {content: ''}
    
   
    
    return (
       
        <section className="Note">
            <NoteError>

            <NoteContent
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    onDeleteNote={this.handleDeleteNote}
                    />
          
            
           
            <div className="note_content">
                {note.content}
            </div>


            </NoteError>
                
      

        </section>
        
      );

    }
  
}



export default Note;