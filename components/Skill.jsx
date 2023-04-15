import Image from "next/image";
import React from "react";

function Skill(props) {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-x; tracking-widest uppercase text-[#5651e5] text-[35px] font-bold">
          Skill
        </p>
        <h2 className="py-4">What I Can Do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/341027718_1676182212842322_1799788735964277705_n.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/341027718_1676182212842322_1799788735964277705_n.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/341027718_1676182212842322_1799788735964277705_n.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={
                    "/assets/341027718_1676182212842322_1799788735964277705_n.png"
                  }
                  width={"64"}
                  height={"64"}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
