import React from "react";
import profile from "../assets/profile.png";
import email from "../assets/email.png";
import linkedIn from "../assets/linkedIn.png";
import PROFILE from "../assets/PROFILE-gif.gif";
function Info(){
    return(
        <div>
         <img src={PROFILE} alt="profile" className="profile-picture"/>
         <h1 className="Name">Hrishap Joshi</h1>
         <h4 className="designation">Frontend Developer</h4>
         <p className="website">hrishapjoshi.website</p>
         <div className="btn">
            <button className="Email"><img src={email} alt="email"/>Email</button>
            <button className="LinkedIn"><img src={linkedIn} alt="linkedIn"/>LinkedIn</button>
         </div>
        </div>
    )
}

export default Info;