import Image from 'next/image'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

export default function Profile() {
  return (
    <div className="mt-10 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/images/myprofile.jpg"
                alt="profile-pic"
                width={500}
                height={500}
                className="w-10 h-10 object-cover rounded-full" />
              <div className="hidden lg:block">
                <p className="font-semibold">stitched-s</p>
                <p className="text-secondary-text font-light">@stitched-s</p>
              </div>
            </div>
            <HiDotsHorizontal className="hidden lg:block"/>
          </div>
  )
}
