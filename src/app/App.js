import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import authService from 'app/services/auth/auth-service';

import Home from "app/pages/Home/Home";
import Register from "app/pages/Register";
import Login from "app/pages/Login";

function App() {

  const user = authService.getCurrentUser();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {
            !user && (
              <>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
              </>
            )
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
