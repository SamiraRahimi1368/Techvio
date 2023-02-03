import Image from "next/image"
const Skills = () => {
    return (
        <div className="max-w-screen-xl mt-28 pt-36 px-4 pb-28 sm:px-16 md:px-8 lg:grid lg:grid-cols-2 lg:gap-20 lg:mt-16 xl:px-20 xl:mx-auto">
            <div className="font-dosis text-purple-600   tracking-tight font-semibold sm:text-lg">
                ABOUT OUR COMPANY
                <h2 className="font-bold font-black mt-4 mb-3 lg:leading-[3.5rem] text-lg sm:text-4xl  xl:text-3xl  text-slate-800">Providing your business with a quality IT service is our passion.
                </h2>
                <p className="leading-7 mt-6 text-[15px] font-catamaran lg:text-lg  text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud
                </p>
                <div className="scroll-once" done="true">
                    <div className="mt-6 font-dosis relative">
                        <div className=" font-semibold">
                            IT Consulting
                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">
                            <div in="translate-x-0" out="-translate-x-full" className="absolute left-0 h-1.5 bg-cta-reverse blur-[0.5px] transition-all duration-1000 translate-x-0"></div>
                        </div>
                        <div className="text-cta-reverse font-semibold pt-6">
                            Virtual Workstation
                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">
                            <div in="translate-x-0" out="-translate-x-full" className="absolute left-0 h-1.5 bg-cta-reverse blur-[0.5px] transition-all duration-1000 translate-x-0"></div>
                        </div>
                        <div className="text-cta-reverse font-semibold pt-6">
                            Managed IT Service                        </div>
                        <div className="relative w-full h-1.5 mt-2 overflow-hidden bg-slate-200">
                            <div in="translate-x-0" out="-translate-x-full" className="absolute left-0 h-1.5 bg-cta-reverse blur-[0.5px] transition-all duration-1000 translate-x-0"></div>
                        </div>
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
    )
}

export default Skills