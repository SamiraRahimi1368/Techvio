import Image from "next/image"
const span="bg-white text-black hover:bg-purple-700 hover:text-white w-auto h-14 py-2 px-4 rounded  font-bold transition-all duration-150  rounded-lg focus:shadow-outline border-l-2 border-l-purple-700 pt-4"

const ChooseUs = () => {
    return <div className="pmx-4 lg:grid lg:grid-cols-2 lg:place-items-center max-w-screen-xl xl:mx-auto">
        <div className="w-full relative aspect-square mx-auto mb-8 sm:w-4/5 lg:ml-0 lg:w-full"
        >
            <Image
                src='/images/choose-1.jpg'
                fill
                alt="choose"
            />

        </div>
        <div>
        <div className="text-left grid mx-auto max-w-screen-xlg lg:pr-10  md:ml-16 sm:m-16 ">
            <h1 className="font-bold text-sm text-orange-600 pt-6 ">WHY CHOOSE US?
            </h1>
            <h1 className="font-bold text-black pt-5 text-3xl md:text-xl">Safeguard your brand with Cyber-Security & IT Solutions

            </h1>
            <h1 className="text-lg text-gray-600 pt-6  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
            <div class="grid gap-3 mt-10 md:grid-cols-2 md:gap-4 md:gap-x-6 ">
                <span className={span}>Remote It Assistance</span>
                <span className={span}>Practice IT Management</span>
                <span className={span}>Managed IT Service</span>
                <span className={span}>Solving IT Problems</span>
                <span className={span}>IT Security Services</span>
                <span className={span}>Cloud Services</span>
            </div>
        </div>

        </div>
    </div>
}

export default ChooseUs