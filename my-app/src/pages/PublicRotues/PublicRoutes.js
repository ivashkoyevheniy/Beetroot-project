import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register, Login } from "..";
import { routes } from "../../utils/routes";

export const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.registration} exact component={Register}/>
        <Route path={routes.loginOrHome} exact component={Login}/>
      </Switch>
    </Router>
  );
};