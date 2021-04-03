import { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login'
import './App.css';

export const AppContext = createContext({});

function App() {
  const [user, setUser] = useState(null);

  const store = {
    user: { get: user, set: setUser }
  };

  return (
    <div className="app">
      {!user ? (
        <AppContext.Provider value={store}>
          <Login />
        </AppContext.Provider>
      ) : (
        <div className="app__body">
          {console.log(user.user)}
          <AppContext.Provider value={store}>
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId" >
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </AppContext.Provider>
        </div>
      )}
    </div>
  )
}


export default App;
