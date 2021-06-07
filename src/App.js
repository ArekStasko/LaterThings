import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainPage from './pages/mainPage'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <div >
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/things/:category' component={MainPage} />

      </Router>
    </div>
  );
}

export default App;
