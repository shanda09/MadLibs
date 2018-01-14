import React from "react";
import { Link } from "react-router-dom";


import MadLibAPI from "../api/MadLibAPI";


const MadLib1 = () => (
  <div>
    <h1>
      MadLib1
   </h1>

    <p>
      I saw a {MadLibAPI.getAdj()} with big (noun) on the train ride to (Place). To stop myself from staring, I (verb) my (noun).
   </p>

    <p>
      George.R.R Martin was so (verb) while writing Game of Thrones that he (adverb) (verb) everyone.
   </p>

    <p>
      (Noun) Bankrupts Make-A-Wish Foundation by wishing for so many (noun).
   </p>

    <p>
      When this girl was (verb) by her (Person), The internet came together and {MadLibAPI.getAdj()} told her to (verb).
   </p>




  </div>
);

export default MadLib1;

