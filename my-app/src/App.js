import React from 'react';
import './App.css';
import { Calendar, Login, Register } from './pages/';
import { Login } from './pages/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register } from './pages/';
import { Home } from './pages/Home/Index';

function App() {

 return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch>
          <Route path="/home"> */}
            {/* <Home /> */}
          {/* </Route>
        </Switch>
      </BrowserRouter> */}

      <Login/>

        {/* <Calendar/> */}
      {/* <Register /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
