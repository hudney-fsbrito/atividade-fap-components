import { useState } from "react";

export function Button(props: {name:string}) {

  const [isRotate, setIsRotate] = useState(false);

  function fBtn(e) {
    // e.preventDefault()
    setIsRotate(!isRotate)
    
    if (isRotate) {
      e.target.style.background = "#f1f5f9"
      e.target.innerText = "Click"
      
    } else {
      
      e.target.style.background = "red"
      e.target.innerText = "BOOMMM!!!"
    }
  }
  
  return (
    <div className="flex ">
      <button onClick={(e) => fBtn(e)
      } className={`
        border 
        border-cyan-900 
        bg-slate-100 text-slate-700 px-10 p-5 rounded-3xl 
        active:text-gray-50 active:bg-cyan-900 `}>
        {props.name}
      </button>
      {/* <div className="border border-cyan-900 px-10 p-5 rounded-3xl">
        {props.name}
      </div> */}
    </div>
  );
}
