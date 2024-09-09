import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="h-screen py-12 bg-gray-600">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-200 text-center px-4 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-[400px] ">
            <div className="bg-gray-700 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-4xl font-bold text-slate-200 mb-4">Food App</h3>
              <p className="text-slate-200 mb-4">This food app, built using React and Tailwind CSS, offers a user-friendly platform to explore a variety of cuisines, discover nearby restaurants, and easily order food online. The app's sleek interface and intuitive navigation make it a convenient choice for food enthusiasts</p>
              <a href="https://github.com/FaizAli00/Food_App.git"  target="_blank" className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
          <div className="h-[400px] bg-gray-700 rounded-lg shadow-lg" >
            <div className="bg-lightBlue-100 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-4xl font-bold text-slate-200 mb-4">E-commerce Website</h3>
              <p className="text-slate-200 mb-4">This e-commerce website, powered by React and Tailwind CSS, provides a seamless shopping experience. Users can browse a wide range of products, add items to their cart, and complete secure online purchases. The website's visually appealing design and user-friendly interface make it a convenient platform for online shopping.</p>
              <a href="https://github.com/FaizAli00/NataaliaProject.git" target="_blank" className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
          <div className="h-[400px] bg-gray-700 rounded-lg shadow-lg" >
            <div className="bg-lightBlue-100 rounded-lg shadow-lg p-6 h-full text-center flex items-center flex-col justify-center">
              <h3 className="text-xl lg:text-4xl font-bold text-slate-200 mb-4">Mern stack Website</h3>
              <p className="text-slate-200 mb-4">This website, built using the MERN stack (MongoDB, Express.js, React, and Node.js), offers a dynamic and interactive online experience. The powerful combination of these technologies enables seamless data management, efficient backend operations, and a visually appealing user interface, making it a robust and scalable web application</p>
              <a href="https://github.com/FaizAli00/My-Final-Project-Faiz-Ali-897527-.git" target="_blank" className="bg-blue-500 hover:bg-blue-700 transition duration-300 text-white font-semibold py-2 px-4 rounded">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
