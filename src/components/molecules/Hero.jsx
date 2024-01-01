import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="my-auto">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 capitalize">
            Listen to the <span className="text-[#377DFF]">amazing</span> music
            sound.
          </h1>
          <p className="mt-2 text-gray-500">
            Experience music like never before
          </p>
          <Link
            to="/shop"
            className="inline-block mt-7 bg-[#141718] text-white px-14 py-3 text-lg rounded-lg"
          >
            Shopping Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
