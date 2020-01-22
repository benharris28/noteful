import React from 'react';
import { Route } from 'react-router-dom';
import NoteCard from '../NoteCard/NoteCard';
import NotefulContext from '../NotefulContext';
import { noteCompare, getNotesByFolder } from '../helperFunctions';
import '../App.css';

class Main extends React.Component {
  static contextType = NotefulContext;

  

  render() {
    const { notes } = this.context
    const { folderId } = this.props.match.params
    const noteList = getNotesByFolder(notes, folderId)
    console.log(noteList)
  
    return (
      <section className="Main">
        <ul>
        
          {noteList.map(note => 
            <li key={note.id}>
              <NoteCard 
                id={note.id}
                name={note.name}
                modified={note.modified}
                />
            </li>
            )}
        </ul>

        
      </section>
   
        )
    
    

      

    }
  
}

export default Main;
