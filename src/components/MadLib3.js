import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib3 = () => (
  <div>
    <h1>

      MadLib3
    </h1>

    <p>

      There was a "{MadLibAPI.getNouns()}" for sale at Walmart. I "{MadLibAPI.getVerbs()}" a few while I "{MadLibAPI.getAdv()}" "{MadLibAPI.getVerbs()}" over to the checkout. The cashier "{MadLibAPI.getVerbs()}" at me while I dug into my "{MadLibAPI.getNouns()}" and pulled out my "{MadLibAPI.getNouns()}". 
    </p>

    <p>
      Melania "{MadLibAPI.getVerbs()}" at her husband and "{MadLibAPI.getAdj()}" "{MadLibAPI.getVerbs()}" his "{MadLibAPI.getAdj()}" hair. He "{MadLibAPI.getVerbs()}" at her and told her to "{MadLibAPI.getNouns()}".

    </p>
    <br />
    <button><Link to="/MadLibs">Back</Link></button>
  </div>
);

export default MadLib3;