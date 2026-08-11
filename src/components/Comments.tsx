import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa6'
import { FiRepeat } from 'react-icons/fi'
import { IoIosStats } from 'react-icons/io'

export default function Comments() {
  return (
    <div>
      <div className="px-4 py- flex gap-3 border-b border-border">
              
              <div className = "w-full">
                  <div className="flex justify-between gap-1 text-sm">
                      <div className = "flex gap-1 items-center text-sm">
                          <span className="text-white font-bold">Zara Anaya Patel</span>
                          <span className="text-secondary-text">@zara</span>
                          <span className="text-secondary-text">4h</span>
                      </div>
                      <BsThreeDots className="text-secondary-text"/>
                  </div>
                  <div className="text-white">Sometimes the darkness feels more honest than the night</div>
                  <div>
                  
                  </div>
                  <div className="flex justify-between my-4">
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegComment/>
                          <span className="text-sm">1.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FiRepeat/>
                          <span className="text-sm">7.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegHeart/>
                          <span className="text-sm">2.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <IoIosStats/>
                          <span className="text-sm">5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegBookmark size={20}/>
                      </div>
                  </div>
              </div>
            </div>
      <div className="px-4 py- flex gap-3 border-b border-border">
              
              <div className = "w-full">
                  <div className="flex justify-between gap-1 text-sm">
                      <div className = "flex gap-1 items-center text-sm">
                          <span className="text-white font-bold">Zara Anaya Patel</span>
                          <span className="text-secondary-text">@zara</span>
                          <span className="text-secondary-text">4h</span>
                      </div>
                      <BsThreeDots className="text-secondary-text"/>
                  </div>
                  <div className="text-white">Sometimes the darkness feels more honest than the night</div>
                  <div>
                  
                  </div>
                  <div className="flex justify-between my-4">
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegComment/>
                          <span className="text-sm">1.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FiRepeat/>
                          <span className="text-sm">7.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegHeart/>
                          <span className="text-sm">2.5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <IoIosStats/>
                          <span className="text-sm">5k</span>
                      </div>
                      <div className="text-secondary-text flex items-center gap-1 hover:text-blue-400 cursor-pointer">
                          <FaRegBookmark size={20}/>
                      </div>
                  </div>
              </div>
            </div>
    </div>
  )
}
