import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import NOTES from './dummy-store';
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

    return (

        <div className="App">
          Hello
          
          <nav>
            Nav Section
          </nav>
          
          <div>
            <Sidebar>
              <Route 
                exact path='/' 
                render={() => <MainSideBar folders={NOTES.folders} />}
              />
              
              <Route path='/folder-id' component={folderIDComponent} />
            </Sidebar>
            
            <Main>
              <Route exact path='/' component={MainMain} />
              <Route path='/folder-id' component={folderMain} />
            </Main>
            <Route 
              exact
              path='/'
              render={() => 
                <Main 
                />}
              />

          </div>
        </div>

        
      );

  }
}


export default App;
