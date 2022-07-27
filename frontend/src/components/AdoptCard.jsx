import React from 'react';
import { Link } from 'react-router-dom';
import Cat from '../assets/images/cat.png';

const AdoptCard = ({ id, setId, name, gender }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center m-10 w-72 h-96 shadow-xl rounded-xl"
      onClick={() => {
        setId(id);
        console.log(id);
      }}
    >
      <img className="w-full rounded-xl rounded-b-none" src={Cat} alt="" />
      <h1 className="text-3xl mt-3">{name}</h1>
      <p className="text-lg text-secondary-grey mt-2">Gender : {gender}</p>
      <button className="h-14 mt-6 text-xl rounded-xl rounded-t-none bg-secondary-green w-full">
        More Info
      </button>
    </div>
  );
};

export default AdoptCard;
