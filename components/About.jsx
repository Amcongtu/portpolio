import React from "react";
import Image from "next/image";
function About(props) {
  return (
    <div className="w-full md:h-screen p-2 flex items-center scroll-py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <p className="uppercase py-4 text-xl tracking-widest font-bold text-[35px] text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am Pham Minh Quan, a young and passionate freelance web
            developer.
          </p>
          <p className="py-2 text-gray-699">
            I have experience in jobs such as cutting HTML&#47;CSS from existing
            design files like Figma or Photoshop. Occasionally, I also provide
            assistance in building e-commerce websites using PHP for students,
            projects. I have studied Django Python at the University of Science
            and graduated with honors. Currently, I am pursuing Javascript with
            front-end and back-end technologies such as ReactJS, NextJS, and
            NodeJS. I also have experience with various DBMS such as SQL Server,
            MySQL, and MongooseDB.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200 col-span-2 cursor-pointer">
          <Image src="/assets/digital-device-mockup_53876-89353.avif" alt="Image" width ={80} height={100} className="rounded-xl w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
