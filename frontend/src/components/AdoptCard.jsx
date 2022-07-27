import React from "react";
import { Link } from "react-router-dom";
import Cat from "../assets/images/cat.png";

const AdoptCard = ({ id, setId }) => {
  return (
    <div
      onClick={() => {
        setId(id);
        console.log(id);
      }}
    >
      <img src={Cat} alt="" />
      <p>Sweety</p>
      <p>A sweet playful kitty from Bangalore who is searching for her forever home.</p>
    </div>
  );
};

export default AdoptCard;
