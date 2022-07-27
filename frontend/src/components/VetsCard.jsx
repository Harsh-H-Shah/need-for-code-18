import React from 'react';

function VetsCard({ idx, name, location, contact }) {
  return (
    <div
      key={idx}
      className="flex items-center justify-around m-6 h-32 w-5/6 shadow-xl rounded-lg"
    >
      <h1 className="text-2xl mt-3">{name}</h1>
      <p className="text-lg text-secondary-grey mt-2">{location}</p>
      <button
        href={contact}
        className="h-14 mt-6 w-24 text-xl rounded-md bg-secondary-green"
      >
        Contact
      </button>
    </div>
  );
}

export default VetsCard;
