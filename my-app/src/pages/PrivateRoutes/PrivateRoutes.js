import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Calendar, Workflow } from "..";
import { routes } from "../../utils/routes";

export const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.loginOrHome} exact component={Home}/>
        <Route path={routes.calendar} exact component={Calendar}/>
        <Route path={routes.workflow} exact component={Workflow}/>
      </Switch>
    </Router>
  );
};
