import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MadLib1 from './MadLib1';
import MadLib2 from './MadLib2';
import MadLib3 from './MadLib3';
import MadLib4 from './MadLib4';


const Nav = props => (
    <div>
      <h3 className="header">
        Select Your Mad Lib:
    </h3>
      <div className="listOfLibs">
        <ul className="daList">
          <li>
            <Link to="/MadLibs/madLib1">MAd lib #1</Link>
          </li>
          <li>
            <Link to="/MadLib2">MAd lib #2</Link>
          </li>
          <li>
            <Link to="/MadLib3">MAd lib #3</Link>
          </li>
          <li>
            <Link to="/MadLib4">MAd lib #4</Link>
          </li>
        </ul>
      </div>
      </div>
  )

class MadLibs extends React.Component {
        render(){
      return (


      <Switch>
          <Route exact path="/MadLibs" component={Nav} />
        <Route path="/MadLibs/madLib1" component={MadLib1} />

      </Switch>
      )
  }

  
}


export default MadLibs;
