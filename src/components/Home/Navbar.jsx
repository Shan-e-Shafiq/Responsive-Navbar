import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'
import NavDropdown from './NavDropdown'

export default function Navbar() {

    const DropDownOptions = useMemo(() => {
        return {
            dropdown1: [
                { name: "option1", route: "/page2" },
                { name: "option2", route: "/page3" },
                { name: "option3 the quick brown fox", route: "/page4" },
                { name: "option4", route: "/page2" },
            ]
        }
    }, [])
    const [openHamburger, setopenHamburger] = useState(false)

    return (
        <nav className={`flex items-center py-4 select-none transition-all duration-200 flex-col lg:flex-row ${openHamburger ? "h-[300px]" : "h-[70px]"}`}>

            {/* CONTAINER */}
            <div className='flex justify-between items-center container mx-auto px-4 lg:px-20'>

                {/* LOGO */}
                <Link to="/">
                    <img src="/assets/Home/logo.svg" alt="" />
                </Link>

                {/* NAVBAR ITEMS */}
                <div className="hidden lg:flex gap-10">
                    <NavItem label="Home" route="/" />
                    <NavItem label="Page2" route="/page2" />
                    <NavItem label="Page3" route="/page3" />
                    <NavDropdown label="Dropdown1" dropdownOptions={DropDownOptions.dropdown1} />
                    <NavDropdown label="Dropdown1" dropdownOptions={DropDownOptions.dropdown1} />
                </div>

                {/* SIDE BUTTONS */}
                <div className="hidden gap-2 lg:flex ">
                    <button className='bg-white border-2 border-black px-6 h-10 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300'>
                        Get Started
                    </button>
                    <button className='w-10 h-10 rounded-full text-xl text-white bg-black'>
                        <i className="fa-regular fa-bell mb-1"></i>
                    </button>
                </div>

                {/* RESPONSIVE NAVBAR ELEMENTS */}
                {/* HAMBURGER ICON */}
                <button className="text-3xl lg:hidden" onClick={() => { setopenHamburger(!openHamburger) }}>
                    <i className={`fa-solid ${openHamburger ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

            </div>

            {/* RESPONSIVE NAVBAR ELEMENTS */}
            <div className={`flex flex-col lg:hidden justify-between container mx-auto px-4 lg:px-20 mt-5 transition-opacity duration-300 ${openHamburger ? "opacity-100" : "opacity-0"}`}>

                {/* NAVBAR ITEMS */}
                <div className="flex flex-col gap-3 w-full border border-black">
                    <NavItem label="Home" route="/" />
                    <NavItem label="Page2" route="/page2" />
                    <NavItem label="Page3" route="/page3" />
                    <NavDropdown label="Dropdown1" dropdownOptions={DropDownOptions.dropdown1} />
                    <NavDropdown label="Dropdown1" dropdownOptions={DropDownOptions.dropdown1} />
                </div>

                {/* SIDE BUTTONS */}
                <div className="flex justify-end gap-2 mt-1">
                    <button className='bg-white border-2 border-black px-6 h-10 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300'>
                        Get Started
                    </button>
                    <button className='w-10 h-10 rounded-full text-xl text-white bg-black'>
                        <i className="fa-regular fa-bell mb-1"></i>
                    </button>
                </div>
            </div>

        </nav>
    )
}
