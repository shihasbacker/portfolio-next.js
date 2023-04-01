import Image from "next/image";
import React from "react";
import socialmediaImg from "../public/assets/projects/Socialmedia.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const socialmedia = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1 cover"
          fill
          src={socialmediaImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Social Space</h2>
          <h3>Social Media Web App</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            A social media web application that allows you to interact with peer
            friends in the form of posts and messages.
          </p>
          <p>
            Features: Login and Signup of the user account with JSON web token
            validation in every page.
          </p>
          <p>
            Complete responsive user side with user timeline, profile, and user
            post.
          </p>
          <p>Real-time user chat implemented using the WebSocket - socket.io</p>
          <Link href='https://www.socialspaces.fashionclues.shop/'>

          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href='https://github.com/shihasbacker/SocialMedia-MERN-Project'>
          <button className="px-8 py-2 mt-4">Code</button>
          </Link>
          <Link href="/#projects">
            <p className="underline cursor-pointer pt-6">Back</p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongoose
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Certbot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default socialmedia;
