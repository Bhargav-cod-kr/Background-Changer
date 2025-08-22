import React from 'react'

function Button({text='button', color='bg-black-500', onClick}) {
    // console.log(props.text);
    

  return (
    <div>
        <button
        className={`px-5 py-2.5 m-1.5 border-0 rounded-lg text-base font-semibold cursor-pointer transition ease-in-out duration-200 ${color}`}
        onClick = {onClick}
        >{text}</button>
    </div>
  )
}

export default Button