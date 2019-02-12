import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import './index.css';
import Sidebar from './Containers/Sidebar';
import Home from './Containers/Home';
import About from './Containers/About';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
	  <div style={{display: "inline-block"}}>
	    <Sidebar />
	    <Switch>
	      <Route exact path="/" component={Home} />
	      <Route path="/home" component={Home} />
	      <Route path="/about" component={About} />
	    </Switch>
	  </div>
  </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
