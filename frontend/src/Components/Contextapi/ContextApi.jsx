import React, { useState } from 'react'
import { createContext } from 'react'
export const  Mycontext=createContext();
function ContextApi  (props)  {
    const [sortdata,setSortdata]=useState("")
    const [search,setSearch]=useState("")
    function searchproduct(e){
setSearch(e.target.value)
    }
    const getsortdata=(data)=>{
setSortdata(data)
    }
    console.log(search,"context sortdataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  return (
   <Mycontext.Provider value={{getsortdata,sortdata,searchproduct,search}}>
    {props.children}
   </Mycontext.Provider>
  )
}

export default ContextApi
