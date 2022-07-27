import React from "react";
import HealthImg from "../assets/images/healthimg.png";
import Navbar from "../components/Navbar";
import HomeCss from "../assets/home.css";
import Dog from "../assets/images/saddog.jpg";
import OrganizationCard from "../components/OrganizationCard";
import VetsCard from "../components/VetsCard";

const Health = () => {
  return (
    <div>
      <section className="bghealth">
        <Navbar />
        <article className="flex flex-row justify-evenly items-center">
          <span className="tb:ml-14 hidden tb:flex flex-col justify-center">
            <h1 className="font-serif font-extralight text-gray h-32 text-6xl ">
              Healing hands for <br className="hidden lp:block" />
              paws.
            </h1>
            <p className="text-3xl font-sans text-secondary-darkgray mt-3 tb:mt-6">
              Pup, pup, hooray!
            </p>
            <br />
            <button className="h-14 rounded-md text-xl bg-secondary-pink w-52">
              Search for vets
            </button>
          </span>
          <img
            src={HealthImg}
            alt="healthimg"
            draggable="false"
            className="w-2/5 -mr-10"
          />
        </article>
      </section>
      <section className="h-3/5 flex flex-row justify-evenly items-center bg-secondary-pink ">
        <img className="w-2/5 mt-10 mb-10 -mr-10" src={Dog} alt="dog" />
        <article className="w-2/5 text-right">
          <h1 className="ml-2 h-32 mb-10 text-5xl">
            Find organizations near you.
          </h1>
          <p className="text-xl w-86 ">
            Only 10% of the dogs born find a permanent house. Each year,
            approximately 2.7 million dogs and cats are killed every year
            because they aren't able to find a forever home.
          </p>
        </article>
      </section>
      <div>
        <p>Organizations</p>
        <OrganizationCard />
      </div>
      <section>
        <h1>Find Vets Near You</h1>
        <VetsCard />
      </section>
    </div>
  );
};

export default Health;
