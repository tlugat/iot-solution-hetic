import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { ProvideAuth } from "app/hooks/useAuth";

import "./App.scss";

import Header from "app/commons/Header/Header";
import PrivateRoute from "app/commons/PrivateRoute/PrivateRoute";
import Home from "app/pages/Home/Home";
import Register from "app/pages/Register/Register";
import Login from "app/pages/Login/Login";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <ProvideAuth>
            <Header/>
            <PrivateRoute exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </ProvideAuth>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
