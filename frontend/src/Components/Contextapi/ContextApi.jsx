import React, { useState } from 'react'
import { createContext } from 'react'
export const  Mycontext=createContext();
function ContextApi  (props)  {
    const [sortdata,setSortdata]=useState("")
    const getsortdata=(data)=>{
setSortdata(data)
    }
    console.log(sortdata,"context sortdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  return (
   <Mycontext.Provider value={{getsortdata,sortdata}}>
    {props.children}
   </Mycontext.Provider>
  )
}

export default ContextApi
