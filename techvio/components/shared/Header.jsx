const Header = () => {
    <div className="text-white font-bold text-4xl xl:mt-10 lg:mt-8  sm:ml-16  ">Techvio</div>
    return <div className="h-16 bg-transparent flex justify-between items-center px-15 xl:pl-28 lg:pl-10 pt-6 lg:gap-x-2 ">
        <div className="text-white font-bold text-4xl xl:mt-10 lg:ml-0 lg:mt-8 sm:ml-16 2xl:ml-24 md:ml-6">Techvio</div>
        <div>

            <nav>
                <div className="container flex flex-wrap items-center justify-between mx-auto ">
                    <div className=" w-full md:block md:w-auto " id="navbar-dropdown">
                        <ul className="flex flex-col border border-gray-100 rounded-lg text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:mt-8 lg:gap-2 lg:pt-6">

                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:ml-6">Home
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strgap-4okeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg></button></li>
                            <li>
                                <a href="#" className="block text-white  rounded md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-white  md:dark:bg-transparent" aria-current="page">About Us</a>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg></button></li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pages
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg></button></li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Blogs
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        className="w-6 h-6 display: inline-block text-cyan-700 text-sm"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                    </svg></button></li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-white  md:dark:bg-transparent" aria-current="page">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
        <div>
            <button className="bg-purple-500 brightness-80 text-white hover:bg-blue-700 hover:text-white w-40 h-12 mr-40 mt:1 rounded  font-bold transition-colors duration-150  rounded-lg focus:shadow-outline lg:mt-8 ">
                Get It Support </button>
        </div>
    </div>
}

export default Header