import React from 'react';

import NotefulContext from '../NotefulContext';
import '../App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { getNodeText } from '@testing-library/dom';
import { noteCompare, folderDisplay } from '../helperFunctions';

class NotePageSideBar extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext;

  render() {
  // Need to display the correct note according to oath
  // Need to display the correct folder according to path
   const { notes, folders } = this.context;
   const { noteId } = this.props.match.params
  

  const noteFound = noteCompare(notes, noteId) || {}
  
  const folder = folderDisplay(folders, noteFound.folderId)

    return (

        <div className="NotePageSideBar">
        
        <button
            role='link'
            className='NotePageNav__back-button'
            onClick={() => this.props.history.goBack()}
            >
            Go Back
        </button>
        {folder && (
          <div className='NotePageNav_folder-title'>
          {folder.name}
        
        
        </div>
        )}
             

        </div>
      );

    }
  
}

export default NotePageSideBar;