import React from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, Workflow, Home, Calendar, Statistics, Users, Settings } from './pages/';

function App() {

  return (
    <div className="App">
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workflow">
            <Workflow />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>

{/* import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes} from './pages/';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
 return (
    <div className="App">
      { token ? <PrivateRoutes accessToken={token}/> : <PublicRoutes/>} */}

    </div>
  );
}

export default App;




// function Login() {
//   const { state } = useLocation();
//   const { from } = state || { from: { pathname: "/" } };
//   const [redirectToReferrer, setRedirectToReferrer] = useState(false);

//   const login = () => {
//     fakeAuth.authenticate(() => {
//       setRedirectToReferrer(true);
//     });
//   };

//   if (redirectToReferrer) {
//     return <Redirect to={from} />;
//   }

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

// /* A fake authentication function */
// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   }
// };