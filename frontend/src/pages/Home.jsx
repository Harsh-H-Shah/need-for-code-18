import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import HomeCss from "../assets/home.css";
import Lady from "../assets/images/ladyillustration.png";
import Dog from "../assets/images/dogillustration.png";
import Footer from "../footer";


const Home = () => {
  return (
    
    
      <div className="navbardiv">
        <Navbar />
      <section className="bgimage" class="object-fit">
        
      <div class="grid grid-cols-2 gap-2">
        <div>
  
          <article>
            <h1 id="home-1"> We Care For <br/> Indian Strays </h1>
            <h3>Lorem ipsum dolor sit amet<br/>consectetur adipiscing elit</h3>
            <button className= "pinkbutton">Adopt</button>
            <button className="pinkbutton">Donate</button>
          </article>
        </div>
        <div>
        <img className="lady"class="object-scale-down h-80 w-50" src={Lady} alt="lady" />
        </div>
      </div>
     </section>

     <section>
      <div class="grid grid-cols-2 gap-2">
        <div>
        <img className="dog1" class="object-scale-down h-80 w-50" src={Dog} alt="dog"/>
        </div>
        <div classname="home-2">
        <article>
          <h1>How can you help us?</h1>
          <h4>
          You can help us by donating to our fundraiser. 100% of all donations go towards one or more of the following: Food for stray animals, emergency medical treatment, reflective collars, sterilizations or vaccinations. <br/><br/>

            Or register and become a part of Paws Hunger!
            Earn a certificate, LOR, and other benefits by feeding a stray in your own neighborhood for a minimum period of 1 month. You are eligible to register even if you already feed a stray animal.
          </h4>
        </article>
        <button className= "bluebutton">Register</button>
        </div>
      </div>
     </section>
     <section>
      <br/><br/>
      <div className="panel">
        <h1>What We Do</h1>
      </div>
      <br/><br/>
      <Panel/>
     </section>
    
    
     <section>
      <div class="grid grid-cols-2 gap-2">
        <div className="home-3">
        <article>
          <h1>
            About Us
          </h1>
          <h4 >
          We are a youth-driven non-profit organization devoted to animal care, dedicated to revolutionizing the animal welfare sector. We primarily focus on stray animals being fed by the people in their neighbourhood. <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 
            With a team of equally enthusiastic volunteers, we hope to instill a passion for animal care and welfare in the hearts of every individual, just like our friendly neighbourhood dog did in ours.

          </h4>
        </article>
        </div>
        <div>
        <img className="dog2" class="object-scale-down h-80 w-50" src={Dog} alt="dog"/>
        </div>
      </div>
      <br/><br/>
     </section>
     <Footer />
    </div>
    
    
  );
};

export default Home;
