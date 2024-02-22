import Image from 'next/image'
import React from 'react'
import CMCLogo from '../public/cmclogo.png'

const Navbar = () => {
  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 ">
            <Image
            src={CMCLogo}
            alt = "CMC Logo"
            width="120"
            height="75"
            className="cursor-pointer"
            priority
            />

            <div>Right side</div>
        </div>
    </nav>
  )
}

export default Navbar