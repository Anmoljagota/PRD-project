import React, { useState } from 'react'
import { createContext } from 'react'
export const  Mycontext=createContext();
function ContextApi  (props)  {
let newdata={
    search:""
}
    const [sortdata,setSortdata]=useState("")
    const [search,setSearch]=useState("")
    function searchproduct(e){
setSearch({...search,searchdata:e.target.value})
    }
    const getsortdata=(data)=>{
setSortdata(data)
    }
    const Opendrawer=(data)=>{

    }
  return (
   <Mycontext.Provider value={{getsortdata,sortdata,searchproduct,search,Opendrawer}}>
    {props.children}
   </Mycontext.Provider>
  )
}

export default ContextApi
