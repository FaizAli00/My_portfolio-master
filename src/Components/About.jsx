import React from 'react';
import img from './images/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-8 bg-gray-700 lg:h-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-6xl font-bold text-slate-200 text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 p-6 md:grid-cols-2 gap-8 ">
          <div className="flex justify-center items-center">
            <img src={img} alt="Profile" className='w-[80%] h-[550px] rounded-lg'/>
          </div>
          <div className=" place-items-center ">
            <p className="text-xl lg:text-2xl text-slate-200 my-2">
              Hi, I'm Faiz Ali, a passionate front-end web developer with a strong eye for design and a knack for creating beautiful and user-friendly interfaces. I have a solid foundation in HTML, CSS, and JavaScript, along with experience in popular front-end frameworks like React.js .
            </p>
            <p className="text-xl lg:text-2xl text-slate-200 mb-6">
              I enjoy collaborating with clients and turning their ideas into reality. My goal is to create seamless and intuitive experiences that engage users and leave a lasting impression. With attention to detail and a focus on user-centered design principles, I strive to deliver high-quality solutions that meet the needs of both businesses and their users.
            </p>
            <p className="text-xl lg:text-2xl text-slate-200 mb-6">
              When I'm not coding, you can find me exploring the latest web development trends, attending tech conferences, or experimenting with new design tools. I believe in continuous learning and staying up-to-date with industry best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
