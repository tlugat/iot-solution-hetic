import {Route, Redirect} from 'react-router-dom';
import {useAuth} from "app/hooks/useAuth";

const PrivateRoute = ({component: Component, ...rest}) => {

  const auth = useAuth();

  return (
      <Route {...rest} render={(props) => (
        auth.user ? <Component {...props}/> : <Redirect to="/login"/>
      )}/>
  )
}

export default PrivateRoute
