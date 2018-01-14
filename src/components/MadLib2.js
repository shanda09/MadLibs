import React from "react";
import { Link } from "react-router-dom";


const MadLib2 = () => (
  <div>
    <h1>

      MadLib2
    </h1>
    
    <p>
    Annual (adjective) parade passed through (place) unnoticed while everyone was (verb) in (adjective).
    </p>

    <p>
    He just wanted to (verb) while watching television, but his (adjective) (noun) kept (verb).
    </p>
    
    <p>
    Sony released a new game about (noun) who (adverb) while (verb).
    </p>

    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib2;