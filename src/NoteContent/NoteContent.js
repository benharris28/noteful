import React from 'react';
import { Link } from 'react-router-dom';
import { format, formatWithOptions } from 'date-fns/fp'
import { moment } from 'moment';
import PropTypes from 'prop-types'
import NotefulContext from '../NotefulContext';
import './NoteContent.css';



class NoteContent extends React.Component {
  
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
    console.log(this.props.id)
    
 
    
    return (

        <div className="NoteContent">
           
            <div className="noteContent-title">
                <Link
                    to={`/note/${id}`}>
                        <h2>{name}</h2>
                </Link>
            </div>
            
        
           
                <button
                    className="noteContent-delete-button"
                    onClick={this.handleClickDelete}>
                    Delete
                </button>
                <div className="noteContent-modified"    >
                    Modified
                    {' '}
                
                    {modified}
                </div> 
         
      

        </div>
      );

    }
  
}

NoteContent.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
   


    
};

export default NoteContent;
