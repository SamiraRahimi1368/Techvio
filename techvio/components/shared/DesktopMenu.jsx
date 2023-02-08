const ItemStyle = 'flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:ml-6 '

const DesktopMenu = () => {
    return (
        <nav className="hidden lg:block">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <div className=" w-full md:block md:w-auto " id="navbar-dropdown">
                    <ul className="flex flex-col border border-gray-100 rounded-lg text-white md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:mt-8 lg:gap-2 lg:pt-6 2xl:text-2xl">

                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={ItemStyle}>Home
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" /></svg></button></li>
                        <li className="lg:w-24">
                            <a href="#" className={ItemStyle} aria-current="page">AboutUs</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={ItemStyle}>Services
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" /></svg></button></li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={ItemStyle}>Pages
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" /></svg></button></li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={ItemStyle}>Blogs
                                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" /></svg></button></li>
                        <li>
                            <a href="#" className={ItemStyle} aria-current="page">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DesktopMenu