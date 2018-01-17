import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib4 = () => (
  <div>
    <h1>
      Rick & Morty MadLib
    </h1>


           <div id="libDiv">
    <p>
    After Trump tweeted, he (adverb) (verb) on (noun) and (verb). 
    </p>

    <p>
      After watching that black mirror episode, I "{MadLibAPI.getAdv()}" buried my face in (noun) and thought about "{MadLibAPI.getAdj()}" (noun).
    </p>
       </div>
    <br />
    <button><Link to="/MadLibs">Back</Link></button>

  </div>
);

export default MadLib4;