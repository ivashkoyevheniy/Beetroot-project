import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Register, Workflow, Home, Calendar} from './pages/';

function App() {

 return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
             <Home />
          </Route>
          <Route path="/workflow">
            <Workflow/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
        </Switch>
      </Router>

      {/* <Login/> */}
      {/* <Workflow/> */}
        {/* <Calendar/> */}
      {/* <Register /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
