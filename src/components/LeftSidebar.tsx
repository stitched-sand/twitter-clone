import Link from "next/link"
import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { GoHomeFill } from 'react-icons/go'

export default function LeftSidebar() {
  return (
    <aside className="fixed left-0 top-0 w-[50px] lg:w-[400px] p-1 lg:p-4 h-screen">
        <p className="mb-6 text-white">
          <FaXTwitter size={30} />  
        </p>
        <div className="space-y-2">
          <Link href="#" className="text-white flex items-center lg:gap-3 p-3 rounded-full hover:bg-hover">
          <GoHomeFill size={30}/>
          <span className="hidden lg:inline text-xl font-bold">Home</span>
          </Link>
        </div>
    </aside>
  )
}
