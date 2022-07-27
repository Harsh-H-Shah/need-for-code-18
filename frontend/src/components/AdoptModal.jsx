import React from 'react';
import Cat from '../assets/images/cat.png';
import { Link } from 'react-router-dom';

const AdoptModal = ({ id, setId }) => {
  const handleClick = () => {
    setId(-1);
  };
  return (
    <div className="top-0 absolute">
      <button
        onClick={() => {
          handleClick();
          console.log(id);
        }}
      >
        X
      </button>
      <img src={Cat} alt="cat" />
      <h1>Sweety</h1>
      <p>gender</p>
      <h2>Story</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        repellat dolores modi deserunt ut velit, id corporis praesentium quis
        nostrum voluptates ex molestiae! Dolor reprehenderit, animi iste ab
        velit consequatur?
      </p>
      <section>
        <input type="radio" value="vaccinated" />
        <label>Vaccinated</label>
        <input type="radio" value="not vaccinated" />
        <label>Not Vaccinated</label>
        <input type="radio" value="neutered" />
        <label></label>
      </section>

      <Link to="/adopt/app">Apply for adoption</Link>
    </div>
  );
};

export default AdoptModal;
