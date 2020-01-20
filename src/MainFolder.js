import React from 'react';
import { Route } from 'react-router-dom';
import NoteCard from './NoteCard';
import NotefulContext from './NotefulContext';
import { noteCompare, getNotesByFolder } from './helperFunctions';
import './App.css';

class MainFolder extends React.Component {
  static contextType = NotefulContext;

  render() {
    const { notes } = this.context
    const { folderId } = this.props.match.params
    const noteList = getNotesByFolder(notes, folderId)

    

    const notesToDisplay= noteList.map(note => 
        <NoteCard {...note} key={note.id} />)
    
    return (

        <div className="Main">
        
        {notesToDisplay}}
             

        </div>
      );

    }
  
}

export default MainFolder;
