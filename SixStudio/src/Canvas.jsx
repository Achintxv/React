import React, { useEffect, useRef } from 'react'
import image from "./canvasImage"

function Canvas() {
  const canvasRef = useRef(null);
  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2nd");
    const img = new Image();
    img.src = canvasImage[0];
    img.onload = ()=>{
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img,0,0);
    }
  })
  return (
    <canvas ref={canvasRef} id='canvas'></canvas>
   )
}
export default Canvas