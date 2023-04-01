import React from "react";
import ProjectItem from "./ProjectItem";
import Ecommerce from "../public/assets/projects/Ecommerce.png";
import SocialMedia from "../public/assets/projects/Socialmedia.png";

const projects = () => {
  return (
    <div id="projects" className="w-full">
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
            projectUrl="/ecommerce"
          />
          <ProjectItem
            title="Social Space"
            type="Social Media"
            backgroundImg={SocialMedia}
            projectUrl="/socialmedia"
          />
        </div>
      </div>
    </div>
  );
};

export default projects;
