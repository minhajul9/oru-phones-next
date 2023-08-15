import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { FaAlignLeft } from 'react-icons/fa'

export default function Home() {
  return (
    <main className='min-h-screen bg-[#FAFBFF]'>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <Navbar></Navbar>
          <label htmlFor="my-drawer-2" className="absolute top-10 text-xl ms-3 text-yellow-600 drawer-button lg:hidden">
            <FaAlignLeft></FaAlignLeft>
          </label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-white text-[#1A1558]">
            {/* Sidebar content here */}
            <div className='p-2 border m-6 rounded-md shadow-md text-center'>
              <h1 className='font-Outfit font-bold text-3xl'>Dashboard</h1>
            </div>
            <li>
              <Link href=''>My Profile</Link>
            </li>
            <li><Link href=''>My Connection</Link></li>
          </ul>

        </div>
      </div>

    </main>
  )
}
