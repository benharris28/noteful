import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import NotefulContext from '../NotefulContext';
import './SideBar.css';

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
    const { notes = [], folders = []} = this.context

    console.log(notes)
    
    
    

   
      
    
       
    
    return (

        
        
        <div className="SideBar">
            <ul className="SideBar_list">
              {folders.map(folder => 
                <li key={folder.id}>
                    <NavLink
                      className="SideBar_folder-link"
                      to={`/folder/${folder.id}`}>
                      
                      {folder.name}
                    </NavLink>
                </li>
                )}
            </ul>
           <div className="button-container">
             
            <Link
                className="addFolder-button"
                to='/add-folder'>
                  Add Folder
            </Link>
               
                
            
           </div>
      

        </div>
             

        
      );

    }
  
}

export default SideBar;
