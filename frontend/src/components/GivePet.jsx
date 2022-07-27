import { useRef } from 'react';
import axios from 'axios';

const GivePet = () => {
  const nameRef = useRef('');
  const descRef = useRef('');
  const genderRef = useRef('');
  const vaccinatedRef = useRef('');
  const neuteredRef = useRef('');

  const handleSubmit = async (
    e,
    name,
    description,
    gender,
    vaccinated,
    neutered
  ) => {
    e.preventDefault();
    let id = new Date();
    const data = await axios.post('http://localhost:5000/api/adopt', {
      id,
      name,
      description,
      gender,
      vaccinated,
      neutered,
    });
    console.log(data);
  };
  return (
    <form
      className="flex flex-col bg-primary shadow-pn rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans"
      onSubmit={(e) => {
        handleSubmit(
          e,
          nameRef.current.value,
          descRef.current.value,
          genderRef.current.value,
          vaccinatedRef.current.value,
          neuteredRef.current.value
        );
      }}
    >
      <label>Name</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="text"
        name="name"
        ref={nameRef}
      />
      <input type="file" name="image"></input>
      <label>Description</label>
      <textarea name="description" ref={descRef}></textarea>
      <label>gender</label>
      <input type="text" name="gender" placeholder="male" ref={genderRef} />
      <label>
        Vaccinated?
        <input type="radio" ref={vaccinatedRef} />
        Yes
        <input type="radio" ref={vaccinatedRef} /> No
      </label>
      <label>
        Neutered?
        <input type="radio" ref={neuteredRef} />
        Yes
        <input type="radio" ref={neuteredRef} />
        No
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default GivePet;
