import GivePet from '../components/GivePet';
import React from "react";
import { useState } from "react";
import AdoptCard from "../components/AdoptCard";
import AdoptModal from "../components/AdoptModal";
import HomeCSS from "../assets/home.css";
import Navbar from "../components/Navbar";
import Adopt1 from "../assets/images/adopt1.png";
import Adopt2 from "../assets/images/adopt2.png";

const Adopt = () => {
  const [id, setId] = useState(-1);

  return (
    <div>
      <section className="bgadoption">
        <Navbar />
        <div className="flex flex-row justify-evenly items-center">
          <article className="flex flex-col text-3xl ">
            <p>Do you want to adopt a pet?</p>
            <img className="w-80 mt-10" src={Adopt1} alt="adopt1" />
            <button className="h-14 rounded-md mt-10 ml-10 text-xl bg-secondary-pink w-52">
              Adopt
            </button>
          </article>
          <article className="flex flex-col ml-13 text-3xl">
            <p className="ml-10">Do you want to give your pet for adoption?</p>
            <img className="w-96 mt-10 ml-40 mb-10" src={Adopt2} alt="adopt2" />
            <button className="ml-60 h-14 rounded-md  text-xl bg-secondary-pink w-52">
              Give for Adoption
            </button>
          </article>
        </div>
      </section>
      <h1 className="flex flex-row justify-evenly items-center mt-10 text-3xl font-semibold">Adopt</h1>
      <AdoptCard id={0} setId={setId} />
      {id !== -1 ? <AdoptModal id={id} setId={setId} /> : <></>}
      <GivePet />
    </div>
  );
};

export default Adopt;
