import React from 'react';
import Dog from "../assets/images/cruelty-dog.jpg";
import Navbar from '../components/Navbar';
import Report from '../components/Report';

const Security = () => {
  return (
    <div>
      <Navbar />
      <section className='flex flex-row justify-between items-center'>
        <article className='flex flex-col' >
          <h1 className='' >A Lifeline for India's abused animals</h1>
          <p>
            India’s animals face a culture of extreme abuse. We’re working to
            change that.
          </p>
        </article>
        <img src={Dog} alt="dog" />
      </section>
      <p>
        If you witness animal cruelty or abuse, report it here. Make sure to
        submit evidence to speed up the investigation.
      </p>
      <Report />
    </div>
  );
};

export default Security;
