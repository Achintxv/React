import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion, scale } from 'motion/react';

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 w-40 h-50 rounded-3xl bg-zinc-600/97 text-white p-3.5 overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm mt-4'>{data.desc}</p>
        <footer className='absolute bottom-0 w-full left-0'>
            <div className="flex items-center text-zinc-200 p-2 justify-between">
                <h5>{data.filesize}</h5>
                {data.close ? <IoIosCloseCircle className='text-2xl'/> : <MdOutlineFileDownload className='text-2xl bg-amber-300 rounded-full text-zinc-700' />}
            </div>
            {
                data.tag.isOpen? (
                <div className={`tag w-full h-10 ${data.tag.tagColor === "blue"?"bg-blue-600":"bg-green-600"} text-white flex items-center justify-center font-bold text-sm`}>
                    <button className='cursor-pointer'>{data.tag.tagTitle}</button>
                </div>
            ) : null
            }
        </footer>
    </motion.div>
  );
}

export default Card