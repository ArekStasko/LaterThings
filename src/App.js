import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import MainPage from "./pages/mainPage";
import Login from "./pages/login";
import Register from "./pages/register";
import FirstPage from "./pages/firstPage";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <PersistGate persistor={persistor}>
            <Route exact path="/" component={FirstPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/things/:category" component={MainPage} />
          </PersistGate>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
