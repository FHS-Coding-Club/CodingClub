import React from "react";
import pic1 from "../assets/codingclub1.jpg";
import pic2 from "../assets/codingclub2.jpg";
import pic3 from "../assets/codingclub3.jpg";
import pic4 from "../assets/codingclub4.jpg";
import pic5 from "../assets/codingclub5.jpg";

const Pictures = () => {
  return (
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 ">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={pic1}
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={pic2}
            />
          </div>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block h-full w-full rounded-lg object-cover object-center"
              src={pic5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
