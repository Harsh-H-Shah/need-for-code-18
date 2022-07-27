import { useRef, useState } from 'react';
import axios from 'axios';

const AdoptApp = ({ id }) => {
  const [step, setStep] = useState(0);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef(0);
  const addressRef = useRef('');
  const pincodeRef = useRef(0);
  const petInterestRef = useRef('');
  const percentHomeRef = useRef('');
  const fenceRef = useRef('');
  const quesArr = [
    { question: 'What is your name', ref: nameRef },
    { question: 'What is your email', ref: emailRef },
    { question: 'What is your phone number', ref: phoneRef },
    { question: 'What is your address', ref: addressRef },
    { question: 'pincode', ref: pincodeRef },
    { question: 'pet of interest', ref: petInterestRef },
    {
      question:
        'About what percentage of the time will the pet be left alone without humans?',
      ref: percentHomeRef,
    },
    {
      question: 'Do you have a pet proof fenced balcony or yard?',
      ref: fenceRef,
    },
  ];

  const handleSubmit = async (e) => {
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    setStep(0);
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      pincode: pincodeRef.current.value,
      petInterest: petInterestRef.current.value,
      percentHome: percentHomeRef.current.value,
      fence: fenceRef.current.value,
    };
    await axios
      .post(`api/adopt/${id}/apply`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {step === 0 ? (
        <form
          onSubmit={() => {
            setStep(1);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 1 ? (
        <form
          onSubmit={() => {
            setStep(2);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 2 ? (
        <form
          onSubmit={() => {
            setStep(3);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 3 ? (
        <form
          onSubmit={() => {
            setStep(4);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 4 ? (
        <form
          onSubmit={() => {
            setStep(5);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 5 ? (
        <form
          onSubmit={() => {
            setStep(6);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 6 ? (
        <form
          onSubmit={() => {
            setStep(7);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
      {step === 7 ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <p>{quesArr[step].question}</p>
          <input ref={quesArr[step].ref} />
          <button type="submit">Next</button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};

export default AdoptApp;
