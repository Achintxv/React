import React from 'react'

function Background() {
  return (
    <>
      <div className='w-full h-screen fixed z-[2]'>
        <div className="w-full py-10 flex justify-center text-zinc-400">Documents</div>
        <h1 className='text-[12vw] leading-none absolute font-semibold text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>DOCS.</h1>
      </div>
    </>
  )
}

export default Background