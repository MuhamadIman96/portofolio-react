import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl text-[#ccd6f6]">Muhamad Iman</h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          I'm Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
          assumenda nesciunt repellendus voluptatibus cum laudantium placeat,
          officia ad architecto nam exercitationem reprehenderit aspernatur odit
          minima. Adipisci quibusdam deserunt nisi tenetur!
        </p>
        <div>
          <button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 ">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-3" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
