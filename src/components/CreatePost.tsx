import React from "react";
import Image from "next/image";
import { TbPhoto } from "react-icons/tb";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";


export default function CreatePost() {
  return (
    <div className="flex gap-4 p-4 border border-border">
      <Image
        src="/images/myprofile.jpg"
        alt="profile-pic"
        width={500}
        height={500}
        className="w-10 h-10 object-cover rounded-full shrink-0"
      />
      <div className="w-full">
        <textarea
          placeholder="what's happening?"
          className="w-full placeholder:text-secondary-text outline-none text-xl resize-none text-white"
        ></textarea>
        <div className="flex justify-between py-4 items-center border-t border-border">
            <div className="flex gap-3">
                <div className="text-primary cursor-pointer">
                <TbPhoto size={20}/>
                </div>
                <div className="text-primary cursor-pointer">
                <FaRegFaceSmile size={20}/>
                </div>
                <div className="text-primary cursor-pointer">
                <IoLocationOutline size={20}/>
                </div>
                <div className="text-primary cursor-pointer">
                <RiCalendarScheduleLine size={20}/>
                </div>
            </div>
            <button className="text-black bg-white py-2 px-5 font-semibold cursor-pointer rounded-full">Post</button>
        </div>
      </div>
    </div>
  );
}
