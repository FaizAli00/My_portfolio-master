import React from 'react';
import Typewriter from 'typewriter-effect'
import img from "../Components/images/d.jpg"
import About from './About';
import Projects from './Projcets';
const Home = () => {
  return (
    <>
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
      <div className="relative container mx-auto flex flex-col justify-center h-full">
        <h1 className="text-4xl lg:text-6xl text-slate-200 font-bold mb-4">Hello I'm Faiz Ali</h1>
        <p className="text-lg lg:text-2xl text-gray-300 mb-8">
       
       <Typewriter options={
        {
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "I'm a Front-end Developer",
              "I Can Create Interactive & Responsive Websites",
          ] 
             
        }

        }>

       </Typewriter>     
        </p>
        <div>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-slate-200 text-xl text-center  justify-center font-semibold py-4 px-12 rounded ">Learn More</a>
        </div>
      </div>
    </div>
    <About />
    <Projects />
    </>
  );
};

export default Home;
