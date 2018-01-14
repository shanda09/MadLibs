import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import MadLib1 from './MadLib1';
import MadLib2 from './MadLib2';
import MadLib3 from './MadLib3';
import MadLib4 from './MadLib4';


const Nav = props => (
  <div>
    <h1 >
      Select A Mad Lib:
    </h1>
    <div className="listOfLibs">
      <ul className="daList">
        <li>
          <Link to="/MadLibs/madLib1">Walmart MadLib</Link>
        </li>
        <li>
          <Link to="/MadLibs/MadLib2">3 Little MadLibs</Link>
        </li>
        <li>
          <Link to="/MadLibs/MadLib3">Presidential MadLib</Link>
        </li>
        <li>
          <Link to="/MadLibs/MadLib4">Rick & Morty MadLib</Link>
        </li>
      </ul>
    </div>
  </div>
)

class MadLibs extends React.Component {
  render() {
    return (


      <Switch>
        <Route exact path="/MadLibs" component={Nav} />
        <Route path="/MadLibs/madLib1" component={MadLib1} />
        <Route path="/MadLibs/madLib2" component={MadLib2} />
        <Route path="/MadLibs/madLib3" component={MadLib3} />
        <Route path="/MadLibs/madLib4" component={MadLib4} />

      </Switch>
    )
  }


}


export default MadLibs;