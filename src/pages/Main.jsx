import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Bg from "../assets/bg.png"
import { AiOutlineClose } from 'react-icons/ai';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState("#000000")
  const colors = [
    "#000000",
    "#111111",
    "#222222",
    "#333333",
    "#444444",
    "#ffffff",
  ]
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
      <div style={{ height: "calc(100svh - 3.5rem)" }} className='flex w-full h-full relative'>
        <img src={Bg} style={{ height: "calc(100svh - 3.5rem)" }} alt="" className='w-screen h-full object-cover absolute' />
        <div className='w-full h-full z-20 flex flex-col items-center justify-end'>
          <div className='flex items-center space-x-3 mb-6'>
            {colors.map(item => (
              <button className={`rounded-full ${color === item && "ring ring-blue-500"}`} onClick={() => setColor(item)}>
                <div style={{ backgroundColor: item }} className={`w-5 h-5 rounded-full`}></div>
              </button>
            ))}
          </div>
          <button onClick={toggleDrawer} className='px-8 py-2 bg-white flex mb-12 rounded-full'>사전 예약</button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={380}
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className='h-16 w-full border-b flex items-center justify-between px-4'>
          <div>사전 예약</div>
          <button onClick={toggleDrawer} className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
            <AiOutlineClose className='text-gray-600' />
          </button>
        </div>
      </Drawer>
    </div>
  )
}

export default Main