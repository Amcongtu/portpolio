import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact(props) {
  return (
    <div>
      <div className="w-full lg:h:screen">
        <div className="max-w-[1240px] m-auto px-2 w-full">
          <p className="text-[35px] font-bold tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-5 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div className="">
                  <Image
                    className={'w-full h-full rounded-xl hover:scale-105 ease-in duration-300'}
                    src={
                      '/assets/341027718_1676182212842322_1799788735964277705_n.png'
                    }
                    alt={"/"}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="">
                  <h2 className="py-2">PHAM MINH QUAN</h2>
                  <p className="">Full-stack Developer</p>
                  <p className="py-4">
                    I am available for freelance or full-time positons. Contact
                    me let&#39;s talk.
                  </p>
                </div>
                <div className="">
                  <p className="uppercase pt-8">Contact With Me</p>
                  <div className="flex items-center justify-between py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>{" "}
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>{" "}
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form action="" className="">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label
                      htmlFor=""
                      className="uppercase text-sm py-2"
                    >Email</label>
                     <input
                        type="email"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                  </div>
                  <div className="flex flex-col py-2">
                    <label
                      htmlFor=""
                      className="uppercase text-sm py-2"
                    >Subject</label>
                     <input
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                  </div>
                  <div className="flex flex-col py-2">
                    <label
                      htmlFor=""
                      className="uppercase text-sm py-2"
                    >Message</label>
                     <textarea
                        type="text"
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      rows={10}></textarea>
                  </div>
                  <div className="flex justify-center items-center py-2 mt-5">
                    <input type="submit" value="Submit" className="text-[25px] font-[500] text-white     bg-[#5651E5] rounded-md shadow-lg py-2 px-4 tracking-[0.5px] select-none active:scale-95 hover:scale-105 cursor-pointer"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
