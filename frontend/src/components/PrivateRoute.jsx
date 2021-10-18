import { Route, Redirect } from "react-router-dom";
import useAuth from './Auth/useAuth';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.user ? (<Component />) : (<Redirect to={{ pathname: "/" }} />)}
    </Route>
  );
};

export default PrivateRoute;
