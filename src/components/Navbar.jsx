import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaAngleRight, FaBell, FaRegBell } from "react-icons/fa";

const Navbar = () => {
    return (

        <div className="navbar bg-white relative">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl ms-4">
                    <Image src='/logo.png' width='100' height='50' alt='Image not found'></Image>
                </a>
            </div>
            <div className="flex-none">
                <FaRegBell className='text-[#1A1558] text-3xl mx-4'></FaRegBell>
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary className='border text-black me-4 md:me-16'>
                                <Image src='/avatar.jpg' width='34' height='34' className='rounded' alt='Image not found'></Image>
                                <div className='md:flex flex-col hidden'>
                                    <span>Welcome back</span>
                                    <span className='text-2xl font-bold'>Vishnu Swaroop</span>
                                </div>
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>


    );
};

export default Navbar;