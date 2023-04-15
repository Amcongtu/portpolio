import React from 'react';
import { FaLinkedinIn,FaGithub } from 'react-icons/fa';
import {BsFillPersonLinesFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
function Main(props) {
    return (
        <div className='w-full h-screen text- center'>
            <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
                <div className="pt-12 mt-4">
                    <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMTHING TOGETHER</p>
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className='text-[#5651e5]'>Phạm Minh Quân</span></h1>
                    <h1 className="py-4 text-gray-700">
                        A Full-stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am Pham Minh Quan, a young and passionate freelance web developer with experience in developing websites and web applications using technologies and skills such as HTML, CSS, JavaScript, Front-end (Reactjs & NextJS12) and Backend Frameworks (Nodejs express, Django Python) with libraries, database technologies, and knowledge of web navigation, optimization. Previously, I worked as a freelance website developer.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div> <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div> <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;