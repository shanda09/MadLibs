import React from "react";
import { Link } from "react-router-dom";


import MadLibAPI from "../api/MadLibAPI";


const MadLib1 = () => (
  <div>
    <h1>
      MadLib1
   </h1>

    <p>
      I saw a "{MadLibAPI.getNouns()}" with big "{MadLibAPI.getNouns()}" on the train ride to "{MadLibAPI.getNouns()}". To stop myself from staring, I "{MadLibAPI.getVerbs()}" my "{MadLibAPI.getNouns()}".
   </p>

    <p>
      George.R.R Martin was so "{MadLibAPI.getVerbs()}" while writing Game of Thrones that he "{MadLibAPI.getAdj()}" "{MadLibAPI.getVerbs()}" everyone.

    <p>
      "{MadLibAPI.getNouns().toUpperCase()}" Bankrupts Make-A-Wish Foundation by wishing for so many "{MadLibAPI.getNouns()}".
   </p>

    <p>
      When this girl was "{MadLibAPI.getVerbs()}" by her (Person), The internet came together and "{MadLibAPI.getAdj()}" told her to "{MadLibAPI.getVerbs()}".
   </p>


    <br />
    <button><Link to="/MadLibs">Back</Link></button>

  </div>
);

export default MadLib1;

