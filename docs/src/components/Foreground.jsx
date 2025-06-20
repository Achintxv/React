import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data =[
        {
            desc: "This is a card.",
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green", }
        },
        {
            desc: "This is a card2.",
            filesize: ".4mb",
            close: true,
            tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue", }
        },
        {
            desc: "This is a card3.",
            filesize: ".5mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green", }
        }
    ];
  return (
    <div ref={ref} className="fixed flex gap-3 top-0 left-0 z-[3] w-full h-screen p-2">
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground