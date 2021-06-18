import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import MainPage from './pages/mainPage'
import Login from './pages/login'
import Register from './pages/register'
import FirstPage from './pages/firstPage'

function App() {

  return (
    <Provider store={store}>
    <div >
      <Router>
        <Route exact path='/' component={FirstPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/things/:category' component={MainPage} />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
