import React, { useState } from 'react'
import Button from './Button';

function Background() {
  const [bgColor, setBgColor] = useState("bg-white")
  // console.log("background is rendered")

  const handleBgColor = (color) => {
    setBgColor(color)
  }

  return (
    <div className={`${bgColor} min-h-screen w-screen fixed top-0 left-0`}>

      <h1 className='bg-black py-3'>Background Changer</h1>

        <div className='flex flex-wrap gap-2.5 items-center py-10'>
            <Button text='red' color="bg-red-500 hover:bg-red-600 active:bg-red-700 hover:scale-105 active:scale-95"
            // onClick={() => handleBgColor("bg-red-500")}
            onClick={() => setBgColor("bg-red-500")}
            />

            <Button text='yellow' color="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 hover:scale-105 active:scale-95"
            onClick={() => handleBgColor("bg-yellow-500")}
            />

            <Button text='green' color="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:scale-105 active:scale-95"
            // onClick={() => handleBgColor("bg-red-500")}
            onClick={() => setBgColor("bg-green-500")}
            />

            <Button text='purple' color="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 hover:scale-105 active:scale-95"
            onClick={() => handleBgColor("bg-purple-500")}            
            />

            <Button text='black' color="bg-black hover:bg-black-600 active:bg-black-700 hover:scale-105 active:scale-95 text-white"
            // onClick={() => handleBgColor("bg-red-500")}
            onClick={() => setBgColor("bg-black")}
            />

            <Button text='white' color="bg-white hover:bg-white-600 active:bg-white-700 hover:scale-105 active:scale-95 text-black"
            // onClick={() => handleBgColor("bg-red-500")}
            onClick={() => setBgColor("bg-white")}
            />

            <Button text='blue' color="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:scale-105 active:scale-95"
            onClick={() => handleBgColor("bg-blue-500")}
            />
        </div>
    </div>
  )
}

export default Background