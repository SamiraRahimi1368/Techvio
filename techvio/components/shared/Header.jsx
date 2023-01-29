import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const Header = () => {

        <div className="text-white font-bold text-4xl xl:mt-10 lg:mt-8  sm:ml-16 relative ">Techvio</div>
        return <div className="h-16 bg-transparent flex justify-between items-center px-15 xl:pl-28 lg:pl-10 pt-6 lg:gap-x-2 ">
            <div className="text-white font-bold text-4xl xl:mt-10 lg:ml-0 lg:mt-8 sm:ml-16 2xl:ml-24 md:ml-6">Techvio</div>
            <div>
                <DesktopMenu />
                <MobileMenu />


            </div>
            <div className="hidden lg:block">
                <button className="bg-purple-500 brightness-80 text-white hover:bg-blue-700 hover:text-white w-40 h-12 mr-40 mt:1 rounded  font-bold transition-colors duration-150  rounded-lg focus:shadow-outline lg:mt-8 ">
                    Get It Support </button>
            </div>
        </div>

}

export default Header