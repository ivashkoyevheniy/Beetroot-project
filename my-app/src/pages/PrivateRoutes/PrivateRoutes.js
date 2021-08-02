import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Calendar, Workflow } from "..";
import { routes } from "../../utils/routes";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.loginOrHome}>
          <Home />
        </Route>
        <Route path={routes.calendar}>
          <Calendar />
        </Route>
        <Route path={routes.workflow}>
          <Workflow />
        </Route>
      </Switch>
    </Router>
  );
};
