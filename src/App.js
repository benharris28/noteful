import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main/Main';
import NOTES from './dummy-store';
import SideBar from './SideBar/SideBar';
import NotePageSideBar from './NotePageSideBar/NotePageSideBar';
import Note from './Note/Note';
import NotefulContext from './NotefulContext';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import './App.css';

class App extends React.Component {
  state = {
    notes: [],
    folders: []
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

  handleAddFolder = folderName => {
    console.log(folderName)
    this.setState({
      folders: [...this.state.folders, folderName]
      
    })
  }

  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
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
              path='/folder/:folderId' 
              component={SideBar}
               
              />

          <Route 
            exact
            path='/note/:noteId'
            component={NotePageSideBar}
            />  

          <Route
            exact
            path='/add-folder'
            component={NotePageSideBar}
            />
        </>
    )}

  renderMain() {
    const { notes, folders } = this.state;
    return (
      <>
        <Route 
          path='/note/:noteId' 
          component={Note}
          />  
            
        
        <Route 
          path='/folder/:folderId' 
          component={Main}
    
              />
        
        <Route
          exact
          path='/' 
          component={Main}
           />  

        <Route
          exact
          path='/add-folder'
          component={AddFolder}
          />

        <Route
          exact
          path='/add-note'
          component={AddNote}
          /> 

  
    </>
    )
  }

  
  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote
    }
   
    return (
      <NotefulContext.Provider value={value}>
      <div className="App">
       
        <nav className="App__sidebar">
          {this.renderSidebar()}
        </nav>
        <header className="App__header">
          <h1>
          <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main className="App__main">
          {this.renderMain()}
        </main>
        
      </div>
      </NotefulContext.Provider> 
      );

  }
}


export default App;
