import { useRef, useState } from 'react';

const AdoptApp = () => {
  const [step, setStep] = useState(0);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();
  const petInterestRef = useRef();
  const percentHomeRef = useRef();
  const fenceRef = useRef();
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
  return (
    <div>
      <p>{quesArr.filter((ques, i) => i === step)[0].question}</p>
      <input ref={quesArr.filter((ques, i) => i === step)[0].ref} />
      {step < quesArr.length - 1 && (
        <button onClick={() => setStep(step + 1)}>Next</button>
      )}
      {step === quesArr.length - 1 && (
        <button
          onClick={() => {
            console.log('submitted');
          }}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default AdoptApp;
