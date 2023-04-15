import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Projects(props) {
    return (
        <div className='w-full'>
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="txt-xl tracking-widest uppercase text-[35px] font-bold text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8 hover:cursor-pointer ">
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#8884f0] to-[#858fa8]">
                        <div className="hidden group-hover:block absolute top-[50%] z-40 left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className='text-3xl text-white tracking-wider text-center'>Proerty Finder</h3>
                            <p className="pb-4 pt-2 text-white text-lg">Reactjs</p>
                            <Link href={"/"} className=''>
                                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-xl cursor-pointer hover:scale-105 active:scale-95 duration-150">More Info</p>
                            </Link>
                        </div>
                        <Image src={"/assets/341027718_1676182212842322_1799788735964277705_n.png"} alt='/' width={80} height={80} className='w-full h-full rounded-xl group-hover:opacity-10'/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;