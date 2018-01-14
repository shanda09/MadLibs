import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Hello';
import MadLibs from './MadLibs';



class App extends React.Component {
  constructor() {
    super();


    this.state = {
      verbs: [],
      nouns: [],
    };
  }


  render() {
    return (
      <div>
        <button id="b1"><Link to="/">Home</Link></button>
        {" "}
        <button id="b2"><Link to="/MadLibs">Mad Libs</Link></button>
        {" "}
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MadLibs" component={MadLibs} />


    </Switch>


      </div>
    )
  }
}

export default App;
