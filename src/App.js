import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import MainPage from "./pages/mainPage";
import Login from "./pages/login";
import Register from "./pages/register";
import FirstPage from "./pages/firstPage";
import UnknownPage from "./pages/error";


function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <PersistGate persistor={persistor}>
          <Switch>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/things/:category" component={MainPage} />
            <Route component={UnknownPage} />
            </Switch>
          </PersistGate>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
