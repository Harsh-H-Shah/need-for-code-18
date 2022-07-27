import { useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../footer';

const AdoptApp = ({ id }) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef(0);
  const addressRef = useRef('');
  const petInterestRef = useRef('');
  const percentHomeRef = useRef('');
  const fenceRef = useRef('');

  const handleSubmit = async (
    e,
    name,
    emailid,
    contactno,
    address,
    petofinterest,
    percentage,
    fence
  ) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/adopt/apply', {
      name,
      emailid,
      contactno,
      address,
      petofinterest,
      percentage,
      fence,
    });
    const data = await response.data;
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <form
        className="flex flex-col bg-secondary-blue shadow-pn rounded-lg mb-12 p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans"
        onSubmit={(e) => {
          handleSubmit(
            e,
            nameRef.current.value,
            emailRef.current.value,
            phoneRef.current.value,
            addressRef.current.value,
            petInterestRef.current.value,
            percentHomeRef.current.value,
            fenceRef.current.value
          );
        }}
      >
        <label>What is your name?</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="name"
          ref={nameRef}
        />
        <label>What is your email?</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="email"
          name="email"
          ref={emailRef}
        />
        <label>What is your phone number?</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="phone"
          ref={phoneRef}
        />
        <label>What is your address</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="name"
          ref={addressRef}
        />
        <label>What is your pet of interest?</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="interest"
          ref={petInterestRef}
        />
        <label>
          About what percentage of the time will the pet be left alone without
          humans?
        </label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="percentHome"
          ref={percentHomeRef}
        />
        <label>Do you have a pet proof fenced balcony or yard?</label>
        <input
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
          type="text"
          name="fence"
          ref={fenceRef}
        />
        <button
          className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-pink items-center rounded-md shadow-md text-md tb:text-xl font-medium"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AdoptApp;
