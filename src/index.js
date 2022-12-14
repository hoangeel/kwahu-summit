import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'pages/Home';
import AboutMain from 'pages/AboutMain';
import HeadsOfState from 'pages/InvitedHeadsOfState';
import Personalities from 'pages/InvitedPersonalities';
import TheHost from 'pages/TheHost';
import SponsorsMain from 'pages/SponsorsMain';
import PlanningCommittee from 'pages/PlanningCommittee';
import REGISTRATION from 'pages/REGISTRATION';




/*import "antd/dist/antd.css";*/

ReactDOM.render(
  <BrowserRouter className="manumanu">
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<AboutMain />}/>
        <Route path="/invited-heads-of-state" element={<HeadsOfState />}/>
        <Route path="/invited-personalities" element={<Personalities />}/>
        <Route path="/the-host" element={<TheHost />}/>
        <Route path="/sponsors" element={<SponsorsMain />}/>
        <Route path="/planning-committee" element={<PlanningCommittee />}/>
        <Route path="/registration" element={<REGISTRATION />}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
