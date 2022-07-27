import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeCss from "../assets/home.css";
import first from "../assets/images/1.png";
import second from "../assets/images/cat-exe.png";
import third from "../assets/images/vet-dog.png";
import Footer from "../footer";

const Info = () => {

  return (

    <div className="navbardiv">
        <Navbar />
        
        <div classname="info-header">
          <h1 style={{textAlign: 'center', color:'#A2D2FF'}}>
          The Basic Necessities of Proper Pet Care
          </h1>
        </div>
        
        <div>
          <br/>
          <p style={{textAlign:'justify'}}>Proper pet care is the basis of responsible pet ownership. It is important when you adopt a pet to understand it is a lifetime commitment to a furry family member that depends on you for his or her health and well-being. 

Happily, the unconditional love and joy that pets bring to our lives more than makes up for the added responsibility that comes with welcoming adding a furry child to your family. To ensure your pet’s health and happiness, following are the necessities that all responsible pet owners need to provide.</p>
        </div>
        <br/><br/>
      <hr/>
      <section>
          <div class="grid grid-cols-2 gap-2">
            <div>
  
              <article>
                <h3 className="foodtext-t">Pets need healthy food</h3>
                <p className="foodtext-p">Just like people, pets need food that meets their specific nutritional needs. Dog foods are designed to meet a dog’s nutritional needs and cat foods are designed to meet a cat’s nutritional needs. Importantly, their dietary needs are very different. Puppies require different food from senior dogs. <br/>
                <br/>Pet’s with health issues may require special diets. Table scraps are typically not good for dogs and cats because many of the foods we eat, such as salt, garlic, and onions are bad for your pet’s health and can make them sick or even be fatal.
              </p></article>
            </div>
          <div>
            <img className="foodimg"class="object-scale-down h-80 w-50" src={first} alt="dog food" />
          </div>
        </div>
     </section>

     <section>
          <div class="grid grid-cols-2 gap-2">
          <div>
            <img className="foodimg"class="object-scale-down h-80 w-50" src={second} alt="dog food" />
          </div>
          <div>
  
              <article>
                <h3 className="exe-t">Make sure that your pet gets regular exercise. 
                </h3>
                <p className="exe-p">JProper pet care also includes exercising your pet.
                Exercise is an important part of your pet’s mental, as well as physical, health. If you spend any time on social media, you know that all kinds of animals like to play such as this ball-playing turtle, this dog playing fetch by himself or this bird playing with a red cup.
                <br/> <br/>
                What some people consider misbehavior in a pet is just the pet getting bored an amusing itself by getting in the garbage or tearing up the couch or…well you get the idea. 
                </p>
              </article>
            </div>
        </div>
     </section>

     <section>
          <div class="grid grid-cols-2 gap-2">
            <div>
  
              <article>
                <h3 className="foodtext-t">Pets require doctor visits and healthy habits.
</h3>
                <p className="foodtext-p">To ensure that your pets are healthy and nimble, you should take them to a local, trusted veterinarian for wellness check-ups at least once a year. Keeping up on your pet’s vaccinations is essential. Clean teeth and healthy gums also play an important role in your pet’s health.  <br/> <br/>If your furry friend is showing signs or symptoms of being sick, take them to your vet or animal hospital right away to get them feeling better sooner rather than later!
              </p></article>
            </div>
          <div>
            <img className="foodimg"class="object-scale-down h-80 w-50" src={third} alt="dog food" />
          </div>
        </div>
     </section>
        
        <Footer />
    </div>

  );

};

export default Info;
