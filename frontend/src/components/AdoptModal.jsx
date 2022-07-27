import React from 'react';
import Cat from '../assets/images/cat.png';
import { Link } from 'react-router-dom';

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" style={{backgroundColor:'#A2D2FF', height:'3em',width:'10em',marginTop:'1em',marginRight:'2em',borderRadius:'0.5em'}}
        onClick={() => setShowModal(true)}
      >
        View More
      </button>
      {showModal ? (
        <>
        <div className="bgmodalcard">
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"  style={{backdropFilter:'blur(1em)'}}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5" style={{alignContent:'center'}}>
                  <label style={{textAlign:'center',fontWeight:'700',fontSize:'2em'}}>
                    Sweety's Info
                  </label>
                  <button
                    className="p-1 ml-auto bg-transparent  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto" style={{backgroundColor:'#FCE7BD', borderColor:'white',alignContent:'center',borderRadius:'1em'}}>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <label style={{fontWeight:'bold'}}>Name:</label> Sweety <br/>
                    <label style={{fontWeight:'bold'}}>Gender:</label> Female <br/>
                    <label style={{fontWeight:'bold'}}>Age:</label> 1 year 2 months <br/>
                    <label style={{fontWeight:'bold'}}>Vaccination Status:</label> Vaccinated <br/>
                    <label style={{fontWeight:'bold'}}>Neutered?:</label> Yes <br/>
                    
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6">
                  <button
                    className="bg-pink-400 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" style={{backgroundColor:'#A2D2FF', height:'3em',width:'8em',marginRight:'2em',borderRadius:'0.5em'}}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-pink-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" style={{backgroundColor:'#FF99C8', height:'3em',width:'8em',borderRadius:'0.5em'}}
                    onClick={() => setShowModal(false)}
                  >
                    Adopt
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
          
        </>
      ) : null}
    </>
  );
}