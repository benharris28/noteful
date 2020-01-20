import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main';
import MainFolder from './MainFolder';
import NOTES from './dummy-store';
import Folders from './Folders'
import SideBar from './SideBar';
import NotePageSideBar from './NotePageSideBar';
import Note from './Note';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends React.Component {
  state = {
    notes: NOTES.notes,
    folders: NOTES.folders
  };

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/notes'),
      fetch('http://localhost:9090/folders')

    ])
    .then(([notesRes, foldersRes]) => {
      if (!notesRes.ok)
        return notesRes.json().then(e => Promise.reject(e));
      if (!foldersRes.ok)
        return foldersRes.json().then(e => Promise.reject(e));

      return Promise.all([notesRes.json(), foldersRes.json()]);
    })
    .then(([notes, folders]) => {
      this.setState({
        notes, folders
      });
    })
    .catch(error => {
      console.error({error});
    });
    
  }
  
  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => noteId !== note.id)
    })
  }

  

  // Render three Sidebar routes
  renderSidebar() {
    const { notes, folders } = this.state;
    console.log(this.state)
    return (
      <>
          <Route 
            exact
            path='/' 
            component={SideBar}              
            />

            <Route 
              path='/folders/:folderId' 
              component={SideBar}
               
              />

          <Route 
            exact
            path='/notes/:noteId'
            component={NotePageSideBar}
            />    
        </>
    )}

  renderMain() {
    const { notes, folders } = this.state;
    return (
      <>
        <Route 
          path='/notes/:noteId' 
          component={Note}
          />  
            
        
        <Route 
          path='/folders/:folderId' 
          component={Main}
    
              />
        
        <Route
          exact
          path='/' 
          component={Main}
           />    

  
    </>
    )
  }

  
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }
   
    return (

      <div className="App">
       <NotefulContext.Provider value={value}>
        <nav className="App__sidebar">
          {this.renderSidebar()}
        </nav>
        <header className="App__header">
          <h1>
          <Link to="/">Noteful</Link>
          </h1>
        </header>
        <div className="App__main">
          {this.renderMain()}
        </div>
        </NotefulContext.Provider> 
      </div>
        
      );

  }
}


export default App;
