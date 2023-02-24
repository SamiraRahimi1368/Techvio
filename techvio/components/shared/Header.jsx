'use client'
import { useState } from "react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const Header = () => {

    const [open, setOpen] = useState(false)

    const hamburger =
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            className="block lg:hidden fill-white mr-10"
        >
            <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>

    return <div className="h-16 bg-transparent flex justify-between items-center px-15 xl:pl-28 lg:pl-10 pt-6 lg:gap-x-2 ">
        <div className="text-white font-bold text-4xl xl:mt-10 lg:ml-0 lg:mt-8 sm:ml-16 2xl:ml-24 md:ml-6 xs:hidden relative">Techvio</div>
        <div>
            <DesktopMenu />
            <MobileMenu open={open} name='samira'/>
        </div>
        <button className="cursor-pointer text-white z-10"
            onClick={() => {
                setOpen(!open)
            }}
        >
            {
                hamburger
            }
        </button>

        <div className="hidden lg:block">
            <button
                className="bg-purple-500 brightness-80 text-white hover:bg-blue-700 hover:text-white w-48 h-12 mr-32 ml-10 mt:1 rounded  font-bold transition-colors duration-150  rounded-lg focus:shadow-outline lg:mt-8 z-0 lg:w-36 "
            >
                Get It Support</button>
        </div>
    </div>

}

export default Header