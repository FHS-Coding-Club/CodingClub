import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto p-4">
      <h1 className="text-6xl whitespace-nowrap mt-10 md:mt-20 flex-shrink-0">
        About Us
      </h1>
      <div className="flex-grow ">
        <div className="border border-white p-4 md:p-8 rounded-lg ml-[8rem]">
          <ul className="text-2xl">
            <li className="mb-5">
              We are a club at Franklin High School that makes cool projects.
            </li>
            <li className="mb-5">
              We innovate and create projects that impact our community.
            </li>
            <li>Engaging students in technology and engineering fields.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
