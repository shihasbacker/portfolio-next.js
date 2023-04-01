import Image from "next/image";
import React from "react";
import ecommerceImg from "../public/assets/projects/Ecommerce.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ecommerce = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute z-1 cover" fill src={ecommerceImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Fashion Clues</h2>
          <h3>E-commerce</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            An e-commerce web application that helps you to sell clothing
            collections made using HBS, CSS, Bootstrap, Node js, MongoDB.
          </p>
          <p>
            Features: Login and Signup of the user account with OTP verification
            Complete responsive user side with session authentication, the home
            page, product page, and cart side along with integrated online
            payment gateway - Razorpay. Complete responsive admin side with
            admin login, dashboard with graphical analysis of sales and revenue
            of a particular period. The admin side contains user management
            along with product management, category management, and product
            management. Application hosted in AWS Cloud platform and the
            database in MongoDB Atlas.
          </p>
          <Link href="https://fashionclues.shop/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/shihasbacker/e-commerce">
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
                <RiRadioButtonFill className="pr-1" /> Node js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Handlebars
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Session & Cookies
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nginx
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Multer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ecommerce;
