import React from "react";
import Cat from "../assets/images/cat.png";

const OrganizationCard = () => {
  return (
    <div className="flex flex-col items-center m-10 w-72 h-96 shadow-xl rounded-xl ">
      <img className="w-full rounded-xl rounded-b-none" src={Cat} alt="" />
      <h1 className="text-3xl h-16 mt-3">PawsHunger</h1>
      <p className="text-lg h-10 text-secondary-grey mt-2">Mumbai</p>
      <button className="h-14 mt-6 text-xl rounded-xl rounded-t-none bg-secondary-green w-full">
        Contact
      </button>
    </div>
  );
};

export default OrganizationCard;
