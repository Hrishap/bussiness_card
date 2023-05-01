import React from "react";
import Facebook from "../assets/Facebook Icon.png";
import Twitter from "../assets/Twitter Icon.png";
import GitHub from "../assets/GitHub Icon.png";
import Instagram from "../assets/Instagram Icon.png";

 function Footer(){
    return(
        <div className="footer--icons">
           <img src={Facebook} alt="Facebook"/>
           <img src={Twitter} alt="Twitter"/>
           <img src={GitHub} alt="GitHub"/>
           <img src={Instagram} alt="Instagram"/>
        </div>
    )
 }

 export default Footer;