import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes} from './pages/';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
 return (
    <div className="App">
      { token ? <PrivateRoutes accessToken={token}/> : <PublicRoutes/>}
    </div>
  );
}

export default App;
