import { useRef } from 'react';
import axios from 'axios';

const Report = () => {
  const nameRef = useRef('');
  const contactRef = useRef('');
  const emailRef = useRef('');
  const kindRef = useRef('');
  const abuserNameRef = useRef('');
  const abuserContactRef = useRef('');
  const abuserLocationRef = useRef('');
  const detailRef = useRef('');

  const handleSubmit = async (
    e,
    name,
    contactno,
    emailid,
    type,
    abusername,
    contactabuser,
    pincode,
    abusedetail
  ) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/report', {
      name,
      contactno,
      emailid,
      type,
      abusername,
      contactabuser,
      pincode,
      abusedetail,
    });
    console.log(response);
  };

  return (
    <form
      className="flex flex-col bg-secondary-blue shadow-pn rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans"
      onSubmit={(e) => {
        handleSubmit(
          e,
          nameRef.current.value,
          contactRef.current.value,
          emailRef.current.value,
          kindRef.current.value,
          abuserNameRef.current.value,
          abuserContactRef.current.value,
          abuserLocationRef.current.value,
          detailRef.current.value
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
      <label>Contact</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="text"
        name="contact"
        ref={contactRef}
      />
      <label>Email</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="email"
        name="email"
        ref={emailRef}
      />
      <label>What kind of abuse did you witness?</label>
      <textarea name="kind" ref={kindRef}></textarea>
      <label>Name of the Abuser</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="text"
        name="name"
        ref={abuserNameRef}
      />
      <label>Contact details of the abuser</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="text"
        name="name"
        ref={abuserContactRef}
      />
      <label>Location of the abuser</label>
      <input
        className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md focus:outline-none p-4"
        type="text"
        name="name"
        ref={abuserLocationRef}
      />
      <label>Details of the abuse</label>
      <textarea name="details" ref={detailRef}></textarea>
      <input type="file" name="image"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Report;
