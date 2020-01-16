import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import NOTES from './dummy-store';
import Folders from './Folders'
import SideBar from './SideBar';
import './App.css';

class App extends React.Component {
  state = {
    NOTES
  }

  setNotes = NOTES => {
    this.setState({
      NOTES
    })
  }

  render() {
    const { NOTES } = this.state;
    console.log(NOTES)
    return (

      <div className="App">
        Hello
          
        <nav>
          Nav Section
        </nav>
        
      <div>
      <main>
        <div className="Sidebar-app"> 
          <Route 
             exact
            path='/' 
            render={() => 
              <SideBar
                folders={NOTES.folders} /> }              
            />

            <Route 
              path='/folders/:folderId' 
              render={( props ) => {
                console.log(props)
                console.log(props.match.params.folderId)
                const noteTest = NOTES.notes.filter(note => note.folderId === 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1')
                console.log(noteTest)
                return <SideBar
                folders={NOTES.folders.filter(folder => folder.id === props.match.params.folderId)}
                />}
                }
    
              />

            <Route 
              path='/notes/:id' 
              render={( props ) => {
                console.log(props)
                console.log(props.match.params.id)
                const noteTest = NOTES.notes.filter(note => note.folderId === 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1')
                console.log(noteTest)
                return <Main
                notes={NOTES.notes.filter(note => note.id === props.match.params.id)}
                />}
                }
    
              />

            <Route 
              path='/folders/:folderId' 
              render={( props ) => {
                console.log(props)
                console.log(props.match.params.folderId)
                const noteTest = NOTES.notes.filter(note => note.folderId === 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1')
                console.log(noteTest)
                return <Main
                notes={NOTES.notes.filter(note => note.folderId === props.match.params.folderId)}
                />}
                }
    
              />
        </div>
        
        
        <div className="main-app">
          <Route
            exact
            path='/' 
            render={() => 
              <Main
                 notes={NOTES.notes}
             
           />} 
           />    

        </div>
      </main>
      

      
              
      

      

      

      
           
                 
      
     
   
   
      

       
     
          
                   
              



              
          
            
           
           
           

          </div>
        </div>

        
      );

  }
}


export default App;
