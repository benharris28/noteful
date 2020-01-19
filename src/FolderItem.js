import React from 'react';
import { Route } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import './FolderItem.css';


class FolderItem extends React.Component {
  
  static contextType = NotefulContext;

  render() {
    
    const folders = this.props;
    
    return (

        <div className="FolderItem">
            <div className="folderitem-title">
                <h2>{folders.name}</h2>
            </div>
           
      

        </div>
      );

    }
  
}

export default FolderItem;