import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib2 = () => (
  <div>
    <h1>

      MadLib2
    </h1>
    
    <p>
      Annual "{MadLibAPI.getAdj()}" parade passed through "{MadLibAPI.getNouns()}" unnoticed while everyone was "{MadLibAPI.getVerbs()}" in "{MadLibAPI.getAdj()}".
    </p>

    <p>
      He just wanted to "{MadLibAPI.getVerbs()}" while watching television, but his "{MadLibAPI.getAdj()}" "{MadLibAPI.getNouns()}" kept "{MadLibAPI.getVerbs()}".
    </p>
    
    <p>
      Sony released a new game about "{MadLibAPI.getNouns()}" who (adverb) while "{MadLibAPI.getVerbs()}".
    </p>

    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib2;