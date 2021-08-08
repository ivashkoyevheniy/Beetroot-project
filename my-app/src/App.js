import React from "react";
import { routes } from "./utils/routes";
import { useHistory  } from "react-router-dom";

import './App.css';


import { PrivateRoutes, PublicRoutes } from './pages/';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const history = useHistory();
  history.push(routes.login);
  return (
    <div className="App">
      {token ? <PrivateRoutes accessToken={token} /> : <PublicRoutes />}

    </div>
  );
}

export default App;