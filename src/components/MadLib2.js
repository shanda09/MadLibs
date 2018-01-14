import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib2 = () => (
  <div>
    <h1>

      MadLib2
    </h1>
    
    <p>
      Annual {MadLibAPI.getAdj()} parade passed through (place) unnoticed while everyone was (verb) in {MadLibAPI.getAdj()}.
    </p>

    <p>
      He just wanted to (verb) while watching television, but his {MadLibAPI.getAdj()} (noun) kept (verb).
    </p>
    
    <p>
    Sony released a new game about (noun) who  while (verb).
    </p>

    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib2;