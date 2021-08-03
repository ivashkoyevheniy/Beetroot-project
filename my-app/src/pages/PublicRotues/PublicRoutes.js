import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register, Login } from "..";
import { routes } from "../../utils/routes";

export const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.registration}>
          <Register />
        </Route>
        <Route path={routes.loginOrHome}>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};