import React from "react";
import { Link } from "react-router-dom";
import MadLibAPI from "../api/MadLibAPI";


const MadLib3 = () => (
  <div>
    <h1>

      MadLib3
    </h1>

    <p>
    There was a (noun) for sale at Walmart. I (verb) a few while I (adverb) (verb) over to the checkout. The cashier (verb) at me while I dug into my (noun) and pulled out my (noun). 
    </p>

    <p>
      Melania (verb) at her husband and {MadLibAPI.getAdj()} (verb) his {MadLibAPI.getAdj()} hair. He (verb) at her and told her to (noun).
    </p>

  </div>
);

export default MadLib3;