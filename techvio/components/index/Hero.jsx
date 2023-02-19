import Image from "next/image"

const Hero = () => {
    return <div
        className="hero -mt-16 flex flex-col items-center lg:pt-28"
        style={{ background: 'linear-gradient(to bottom, #370b6f, #00429b, #006dba, #0095ce, #2dbcdc)' }}
    >
        <div className=" w-full px-4 lg:grid lg:grid-cols-2 lg:items-top lg:gap-12 lg:px-12 xl:px-20 max-w-screen-xl xl:mx-auto">
            <div>
                <div className=" font-dosis text-slate-100 text-center lg:text-start  lg:text-5xl sm:text-3xl  font-bold lg:leading-[4rem]  sm:leading-[4rem] sm:leading-[2rem] lg:mt-20 md:mt-48  lg:mx-0 sm:mt-36 sm:ml-10 sm:mr-10">IT Solutions & Business Services Company</div>
                <div className="sm: mt-3 mt-6 mx-0 text-white lg:text-base sm:text-sm sm:text-center text-left font-catamaran leading-8  lg:text-start lg:mx-0 md:tex-right text-slate-100 md:text-md sm:text-white sm:pr-20 sm:leading-[2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</div>
                <div className="flex gap-2 md:gap-4 sm:gap-2 lg:gap-2 mt-10 mx-0 justify-center lg:justify-start md:mt-1">
                    <button className="bg-white text-purple-700 hover:bg-blue-700 hover:text-white w-40 h-12 rounded mt-10 font-bold transition-colors duration-150  rounded-lg focus:shadow-outline ">
                        About Us
                    </button>
                    <button className="bg-purple-500 text-white hover:bg-blue-700 font-bold hover:text-white w-40 h-12 rounded mt-10 transition-colors duration-150  rounded-lg focus:shadow-outline ml-5">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="lg:mr-10 sm:mr-24 aspect-square mt-16 sm:w-4/5 sm:mx-auto md:w-2/3 lg:w-full xl:w-4/5 relative grid lg:grid-cols-6 md:grid-cols-12 gap-4 ">
                <Image
                    priority
                    fill
                    //src='/images/home-font.png'
                    src='https://samirarahimi.blob.core.windows.net/personalimages/My_Pic.jpg'
                    className="w-full h-full object-cover"

                    alt="home-font"
                />
            </div>
        </div>
        <div className="w-full h-20 -mb-1 mt-10 sm:h-36 md:h-44 sm:mt-0 lg:h-56 xl:h-72 2xl:h-96 relative">
            <Image
                fill
                className="w-full h-full object-cover"
                src='/images/home-bottom-shape.png'
                alt="home-font"
            />
        </div>
    </div>
}

export default Hero