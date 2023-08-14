import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Navbar = () => {
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <div className="navbar bg-white border-b">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>

                        <a className="btn btn-ghost normal-case text-xl">
                            <Image src="/Screenshot 2023-08-14 144026.png" alt="" width='100' height='50'></Image>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">

                    </div>
                    <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            <li tabIndex={0}>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2">

                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-white text-[#1A1558]">
                    {/* Sidebar content here */}
                    <li><Link href=''>My Profile</Link></li>
                    <li><Link href=''>My Connection</Link></li>
                </ul>

            </div>
        </div>


    );
};

export default Navbar;