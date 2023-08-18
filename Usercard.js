import React from "react";
import "./Usercard.css";

function Usercard({ username, fullname, email, location, company }) {
  return (
    <div className="maincard">
      <label className="cardusername" htmlFor="">
        {username}
      </label>
      <h2 className="cardname">{fullname}</h2>
      <h4>{email}</h4>
      <label htmlFor=""> Location:{location}</label>
      <br />
      <label htmlFor="">Company :{company}</label>
    </div>
  );
}

export default Usercard;
