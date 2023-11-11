import React, { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Main = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
      <div style={{ height: "calc(100svh - 3.5rem)" }} className='flex w-full h-full bg-white'>
        <button onClick={toggleDrawer}>Show</button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
        size={350}

      >
        <div>Hello World</div>
      </Drawer>
    </div>
  )
}

export default Main