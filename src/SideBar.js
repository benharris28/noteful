import React from 'react';
import { Route } from 'react-router-dom';
import FolderItem from './FolderItem';
import './App.css';

class SideBar extends React.Component {
  render() {
    console.log(this.props.folders)
    const folderList = this.props.folders
    .map(folder => 
        <FolderItem {...folder} key={folder.id} />)
    
    return (

        <div className="SideBar">
        
        {folderList}
             

        </div>
      );

    }
  
}

export default SideBar;
