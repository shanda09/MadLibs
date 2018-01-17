import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import "./style.css";


import App from './components/App';








render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root")
);
