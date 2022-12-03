import React from "react";


export default function Loader({show}:{show:boolean}){
  return  show ? <div className=" border-[10px] border-transparent border-t-blue-500 border-solid animate-spin  rounded-[50%]  h-[50px] w-[50px]"></div> : null
}
