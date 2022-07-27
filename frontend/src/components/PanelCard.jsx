import React from "react";
import Logo from "../assets/images/pawslogo.png";

const PanelCard = () => {
  return (
    <div className=" w-40 h-40 bg-secondary-yellow flex flex-col place-content-evenly place-items-center rounded-lg shadow-pn">
      <img src={Logo} alt="courselogo" className="w-15" />
      <div className="text-primary text-2xl">Title</div>
    </div>
  );
};

export default PanelCard;
