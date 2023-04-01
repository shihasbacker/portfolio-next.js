import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a Computer Science and Engineering graduate with a 7.4 CGPA, I
            have a strong foundation in computer programming and software
            development methodologies. I have experience working with various
            programming languages. After my graduation, I was working as a
            Junior DevOps Trainee for 10 months in the field of DevOps. I have
            worked with various tools and technologies used in DevOps practices,
            including Jenkins, Docker, Kubernetes, Ansible, and AWS.
          </p>
          <p className="py-2 text-gray-600">
            Currently working as a MERN Stack Trainee in the field of web
            development. During this period, I learned the MERN stack - a
            popular web development technology stack comprising of MongoDB,
            Express.js, React, and Node.js. I also learned to use various tools
            and technologies such as Git and Bootstrap to enhance the user
            interface and user experience of the applications. I am eager to
            continue expanding my knowledge and skills in this field and
            applying them to real-world scenarios. I believe that my experience
            as a MERN Stack Trainee has prepared me to work on challenging web
            development projects and contribute to the development of innovative
            solutions.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
