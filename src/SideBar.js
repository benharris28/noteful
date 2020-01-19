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
    const { NOTES } = this.context
    console.log(this.context)
    
    const folderList = NOTES.folders
    console.log(this.props.match.path)
    const { path } = this.props.match
    
    const folders = path === '/'
      ? folderList.map(folder => <FolderItem key={folder.id} name={folder.name} />)
      : folderList.find(folder => <FolderItem key={folder.id} name={folder.name} />)
       
    
    return (

        <div className="SideBar">
        
        {folders}
             

        </div>
      );

    }
  
}

export default SideBar;
