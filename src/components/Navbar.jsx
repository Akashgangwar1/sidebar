import React, { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'

const Navbar = () => {

    const [Navbar, setNavbar] = useState(true);

    const Toggle = () => {
        if (Navbar === true) {
            setNavbar(false);
        }
        else {
            setNavbar(true);
        }
    }

    return (
        <>
            <nav className='bg-green-200 w-screen '>
                <div className='md:flex  justify-between '>
                    <div className=''> Your Logo </div>
                    <div className='md:hidden top-1 right-2 absolute ' onClick={Toggle} > <FaAlignJustify /> </div>

                    <div className=''>
                        <ul className={`md:flex gap-4 px-3 absolute md:static md:z-auto z-[-1] ${Navbar ? "top-5" : "-top-[100px]"} transition-all duration-200  bg-green-200 w-full `}>
                            <li>Home</li>
                            <li>services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
