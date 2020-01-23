import React from 'react';
import { Link } from 'react-router-dom';
import { format, formatWithOptions } from 'date-fns/fp'
import { eo } from 'date-fns/locale'
import PropTypes from 'prop-types'
import NotefulContext from '../NotefulContext';

import './NoteCard.css';

class NoteCard extends React.Component {
  
    static contextType = NotefulContext;

    handleClickDelete = e => {
        e.preventDefault();
        const noteId = this.props.id

        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.rejected(e))
            return res.json()
        })
        .then(() => {
            this.context.deleteNote(noteId)
            this.props.onDeleteNote(noteId)
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
    
    const { id, name, modified } = this.props;
 
    
    return (

        <div className="NoteCard">
            <div className="notecard-title">
                <Link
                    to={`/note/{id}`}>
                        <h2>{name}</h2>
                </Link>
            </div>
            <div className="noteCard-modified"    >
                Modified
                {' '}
                {modified}
            </div> 
        
            <div className="notecard-button-box">
                <button
                    onClick={this.handleClickDelete}>
                    Delete
                </button>
            </div>
      

        </div>
      );

    }
  
}

NoteCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
   


    
};

export default NoteCard;
