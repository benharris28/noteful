import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import NOTES from './dummy-store';
import Folders from './Folders'
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
           
              
              

              <Route 
                exact
                path='/' 
                component={Folders}                  
                 />
                            
                 
                
              
              
                 <Route 
                    path='/folders/:folderId' 
                    render={(props) => 
                      <Main
                        notes={NOTES.notes.find(note => note.folderId === props.match.params.folderId)}
                      />}
                
                    />

                  <Route 
                    exact
                    path='/' 
                    render={() => 
                      <Main
                        notes={NOTES}
                        
                      />}
                
                    />
              



              
          
            
           
           
           

          </div>
        </div>

        
      );

  }
}


export default App;
