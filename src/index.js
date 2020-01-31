import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from "./components/login";
import Home from "./components/Home/Home";
import InterviewCalendar from "./components/Interview/InterviewCalendar";
import UnEmployeeModal from "./components/UNemployee/UNEmployeeModal";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/login" component={Login}/>
            <Route path="/sidebar" component={Home}/>
            <Route path="/interview1" component={InterviewCalendar}/>
            <Route path="/people" component={UnEmployeeModal}/>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
