import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="w-screen flex flex-col justify-start overflow-x-hidden items-center min-h-screen">
      <form className="flex flex-col bg-secondary-white shadow-pn rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans">
        <div className="font-medium text-xl tb:text-3xl text-center">
          Contact Us
        </div>
        <label htmlFor="name" className="mt-3 tb:mt-5 text-md tb:text-xl">
          Name:
        </label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-pink focus:outline-none p-4"
        ></input>
        <label htmlFor="email" className="mt-3 tb:mt-5 text-md tb:text-xl">
          Email:
        </label>
        <input
          type="text"
          name="email"
          ref={emailRef}
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-pink focus:outline-none p-4"
        ></input>
        <label htmlFor="phone" className="mt-3 tb:mt-5 text-md tb:text-xl">
          Phone:
        </label>
        <input
          type="text"
          name="phone"
          ref={phoneRef}
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-pink focus:outline-none p-4"
        ></input>
        <label htmlFor="message" className="mt-3 tb:mt-5 text-md tb:text-xl">
          Message:
        </label>
        <textarea
          type="text"
          name="message"
          ref={messageRef}
          className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-pink focus:outline-none p-4"
        ></textarea>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-pink items-center rounded-md shadow-md text-md tb:text-xl font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
