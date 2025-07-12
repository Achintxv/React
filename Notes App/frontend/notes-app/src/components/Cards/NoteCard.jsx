import React from 'react'
import { MdOutlinePushPin } from "react-icons/md";
import moment from "moment";
import { IoCreate } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  return (
    <div className='border-1 border-zinc-400 p-3 rounded-md hover:shadow-md transition-all ease-in-out'>
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className='font-semibold'>{title}</h6>
          <span className='text-sm text-zinc-500'>{moment(date).format("Do MMM YYYY")}</span>
        </div>
        <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-sky-700' : 'text-black'} cursor-pointer hover:text-sky-700`} onClick={onPinNote}/>
      </div>
      <p className='font-semibold text-sm'>{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between">
        <div className="text-xs">{tags.map((item)=>`#${item} `)}</div>
        <div className="flex items-center">
          <IoCreate className='text-zinc-500 hover:text-green-600 text-xl cursor-pointer' onClick={onEdit}/>
          <MdDeleteForever className='text-zinc-500 hover:text-red-600 text-xl cursor-pointer' onClick={onDelete}/>
        </div>
      </div>
    </div>
  )
}

export default NoteCard