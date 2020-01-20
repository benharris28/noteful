import React from 'react';
import { Route } from 'react-router-dom';
import NotefulContext from './NotefulContext';

import './NoteCard.css';

class NoteCard extends React.Component {
  
    static contextType = NotefulContext;

    render() {
    
    const { id, name, modified } = this.props;
    
    return (

        <div className="NoteCard">
            <div className="notecard-title">
                <h2>{name}</h2>
            
                <p>{modified}</p>
           </div>
            <div className="notecard-button-box">
                <button>
                    Delete
                </button>
            </div>
      

        </div>
      );

    }
  
}

export default NoteCard;
