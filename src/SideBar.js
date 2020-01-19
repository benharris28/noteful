import React from 'react';
import { Route } from 'react-router-dom';
import FolderItem from './FolderItem';
import NotefulContext from './NotefulContext';
import './App.css';

class SideBar extends React.Component {
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
    
  
    const folderList = this.context.folders
    const { path } = this.props;
    const folders = path !== '/' ? folderList.find(folder => folder.id === this.props.match.params.folderId) : 
    folderList.map(folder => 
        <FolderItem key={folder.id} />)
    
    return (

        <div className="SideBar">
        
        {folders}
             

        </div>
      );

    }
  
}

export default SideBar;
