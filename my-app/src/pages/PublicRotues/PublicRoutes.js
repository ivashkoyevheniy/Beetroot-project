import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { Register, Login } from "..";
import { routes } from "../../utils/routes";

export const PublicRoutes = () => {
  const history = useHistory();
  history.push(routes.login);
  return (
    <Router>
      <Switch>
        <Route path={routes.registration} component={Register} />
        <Route path={routes.login} exact component={Login} />
      </Switch>
    </Router>
  );
};