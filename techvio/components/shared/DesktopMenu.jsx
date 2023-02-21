const ItemStyle = 'flex items-center justify-between w-full py-2 pl-3 pr-4 lg:text-base	xl:text-base 2xl:text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent lg:ml-6 '




const menuItems = [
    {
        title: 'home',
        url: '/'
    },
    {
        title: 'about',
        url: '/about'
    },
    {
        title: 'projects',
        url: '/projects',
        children: [
            {
                title: 'project A',
                url: '/projcts/A'
            },
            {
                title: 'project B',
                url: '/projcts/B'
            },
            {
                title: 'project C',
                url: '/projcts/C'
            }
        ]
    },
    {
        title: 'prices',
        url: '/prices'
    },
    {
        title: 'contact',
        url: '/contact'
    },
]
const DesktopMenu = () => {
    return (
        <nav className="hidden lg:block">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <div className=" w-full md:block md:w-auto " id="navbar-dropdown">
                    <ul className="flex flex-col border border-gray-100 rounded-lg text-white md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:mt-8 lg:gap-2 lg:pt-6 2xl:text-2xl">
                        {
                            menuItems.map(item =>
                                <li className="group relative flex items-center relative h-20">
                                    <a
                                        href={item.url}
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className={ItemStyle}
                                    >
                                        {item.title}
                                        {
                                            item.children?.length > 0 &&
                                            <svg
                                                className="fill-white group-hover:fill-indigo-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="20"
                                                width="20"
                                            >
                                                <path d="m10 13.062-5-5L6.062 7 10 10.938 13.938 7 15 8.062Z" />
                                            </svg>
                                        }
                                    </a>
                                    {
                                        item.children?.length > 0 &&
                                        <ul className="invisible opacity-10 translate-y-8 group-hover:block group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 absolute top-16 bg-white text-black ml-4 lg:w-52 xl:w-68 2xl:w-72 rounded-lg mt-4 	 ">
                                            {
                                                item.children.map(child =>
                                                    <li className="py-3 pl-4 hover:text-purple-600 border-b-2 border-gray-200 border-lg border-slate-800 	last:border-b-0">
                                                        <a
                                                            href={child.url}
                                                        >
                                                            {
                                                                child.title

                                                            }
                                                        </a>
                                                    </li>)
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DesktopMenu