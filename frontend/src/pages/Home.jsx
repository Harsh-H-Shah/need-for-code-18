import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import HomeCss from "../assets/home.css";
import Lady from "../assets/images/ladyillustration.png";
import Dog from "../assets/images/dogillustration.png";

const Home = () => {
  return (
    <div className="bgimage">
      <Navbar />
      <section>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            laudantium similique deserunt, nisi culpa tempora optio provident,
            ut eligendi blanditiis impedit, nulla delectus recusandae et
            voluptatem aliquid facere. Eligendi, fugit?
          </p>
          <button>Adopt</button>
          <button>Donate</button>
        </article>
        <img src={Lady} alt="lady" />
      </section>
      <section>
        <img src={Dog} alt="dog" />
        <article>
          <h1>How can you help us?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            laudantium similique deserunt, nisi culpa tempora optio provident,
            ut eligendi blanditiis impedit, nulla delectus recusandae et
            voluptatem aliquid facere. Eligendi, fugit?
          </p>
        </article>
      </section>
      <Panel />
      <section>
        <p> About Us</p>
      </section>
    </div>
  );
};

export default Home;
