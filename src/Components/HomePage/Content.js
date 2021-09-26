import React from "react";
import phones from "../AppleProducts/Phones/Phone";

import "./Content.css";
// import sb from "../assets/sb.jpg";
// import bc from "../assets/bc.jpg";
// import coco from "../assets/coco.jpg";

function Content() {
  const FilteredPhones = phones.slice(0, 3);
  return (
    <div className="row">
      {FilteredPhones.map((phone) => (
        <div className="phone-container">
            <img
              src={phone.variants[0].images[0]}
              height="100%"
              width="100%"
              alt="Iphone"
            />
          <h3>{phone.name}</h3>
          <ul style={{fontFamily : "Arial"}}>
              <li>Ram : {phone.memory[0].ram}GB</li>
              <li style={{color:"green"}}>Price : {phone.memory[0].price}</li>
            </ul>
        </div>
      ))}
    </div>
  );
}
export default Content;
