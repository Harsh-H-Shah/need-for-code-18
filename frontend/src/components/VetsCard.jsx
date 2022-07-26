import React from "react";

function VetsCard() {
  return (
    <div>
      <section className="flex flex-row">
        <p>Name</p>
        <p>1.8km away</p>
        <button className="h-14 mt-6 text-xl rounded-xl rounded-t-none bg-secondary-green w-full">
          Contact
        </button>
      </section>
      <p>Area</p>
    </div>
  );
}

export default VetsCard;
