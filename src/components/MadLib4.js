import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib4 = () => (
  <div>
    <h1>

      MadLib4
    </h1>

    <p>
      After Trump tweeted, he (adverb) "{MadLibAPI.getVerbs()}" on "{MadLibAPI.getNouns()}" and "{MadLibAPI.getVerbs()}". 
    </p>

    <p>
      After watching that black mirror episode, I "{MadLibAPI.getAdv()}" buried my face in "{MadLibAPI.getNouns()}" and thought about "{MadLibAPI.getAdj()}" "{MadLibAPI.getNouns()}".
    </p>
    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib4;