import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import Ecommerce from "../public/assets/projects/Ecommerce.png";
import SocialMedia from "../public/assets/projects/SocialMedia.png"

const projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Fashion Clues"
            type="E-commerce"
            backgroundImg={Ecommerce}
            projectUrl="https://fashionclues.shop/"
          />
          <ProjectItem
            title="Social Space"
            type="Social Media"
            backgroundImg={SocialMedia}
            projectUrl="https://www.socialspaces.fashionclues.shop/"
          />
        </div>
      </div>
    </div>
  );
};

export default projects;
