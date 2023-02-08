"use client"
import React, { useEffect } from 'react';
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
const percentage = "absolute top-0 text-sm text-cta-reverse right-0 text-black text-lg text-purple-500"
const bar = 'absolute left-0 h-1.5 bg-cta-reverse blur-[0.5px] transition-all duration-1000 translate-x-0'
const title = 'text-cta-reverse font-semibold pt-6'

const Skills = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,

        });

    }, []);

    return (
        <div className="max-w-screen-xl mt-28 xl:pt-36 px-4 pb-28 sm:px-16 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:mt-16 xl:px-20 xl:mx-auto xs:pt-4 " data-aos="fade-up" >

            <div className="font-dosis text-purple-600   tracking-tight font-semibold sm:text-lg">
                ABOUT OUR COMPANY
                <h2 className="font-bold font-black mt-4 mb-3 lg:leading-[3.5rem] text-lg sm:text-4xl  xl:text-3xl  text-slate-800">Providing your business with a quality IT service is our passion.
                </h2>
                <p className="leading-7 mt-6 text-[15px] font-catamaran lg:text-lg  text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud
                </p>
                <div className="scroll-once" done="true" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" >
                    <div className="mt-6 font-dosis relative">
                        <div className=" font-semibold ">
                            IT Consulting

                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">

                            <div in="translate-x-0" out="-translate-x-full" className={bar}>

                            </div>
                        </div>
                        <div className={percentage}>
                            90 %
                        </div>
                        <div className={title}>
                            Virtual Workstation
                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">
                            <div in="translate-x-0" out="-translate-x-full" className={bar}></div>
                           
                        </div>
                        <div className={percentage}>
                                90 %
                            </div>
                            <div className={title}>
                            IT Consulting

                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">

                            <div in="translate-x-0" out="-translate-x-full" className={bar}>

                            </div>
                        </div>
                        <div className={percentage}>
                            90 %
                        </div>
                        <a href="/" className="inline-block text-center min-w-[9rem] py-3 rounded-lg transition duration-300 hover:shadow-md overflow-hidden  bg-cta-reverse text-white bg-purple-600 hover:bg-cta-hover mt-10 ">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="w-full aspect-square mt-10">
                    <Image
                        src="/images/skill.webp"
                        fill
                        alt="our-skills"
                    >
                    </Image>
                </div>
                <div className="bg-white border-b-4 border-b-blue-400 p-6 aspect-video absolute bottom-8 left-8 lg:-left-20 lg:bottom-16">
                    <div className="text-5xl font-bold text-red-400">27</div>
                    <div className="uppercase text-md font-semibold mt-4">years of experience</div>
                </div>
            </div>
        </div>
    );
};


export default Skills

