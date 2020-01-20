import React from 'react';

import NotefulContext from './NotefulContext';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { getNodeText } from '@testing-library/dom';

class NotePageSideBar extends React.Component {
  
  static contextType = NotefulContext;

  render() {
  // Need to display the correct note according to oath
  // Need to display the correct folder according to path
   const { notes, folders } = this.context;
   const { noteId } = this.props.match.params

   const noteCompare = notes.find(note => noteId === note.id)
  
  const folderDisplay = folders.find(folder => folder.id === noteCompare.folderId)
  console.log(folderDisplay)

    return (

        <div className="NotePageSideBar">
        
        <button
            role='link'
            className='NotePageNav__back-button'
            >
            Go Back
        </button>
        <div className='NotePageNav_folder-title'>
          {folderDisplay.name}
        </div>
             

        </div>
      );

    }
  
}

export default NotePageSideBar;