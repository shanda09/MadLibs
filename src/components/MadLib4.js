import React from "react";
import { Link } from "react-router-dom";


const MadLib4 = () => (
  <div>
    <h1>

      MadLib4
    </h1>

    <p>
    After Trump tweeted, he (adverb) (verb) on (noun) and (verb). 
    </p>

    <p>
    After watching that black mirror episode, I (adverb) buried my face in (noun) and thought about (adjective) (noun).
    </p>

    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib4;