import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../Redux/Product_redux/action'
import {Box, Image} from "@chakra-ui/react"
const HomeProduct = () => {
    const dispatch=useDispatch()
    const data=useSelector((store)=>store.homeproduct)
    console.log(data,"i am")
    useEffect(()=>{
      dispatch(getdata)
    })
  return (
    <div>
      {/* <Box border="1px solid blue">
<Box>{data.length>0 && data.map((items)=>(
  <Box><Image src={items.image}/></Box>
))}</Box>
      </Box> */}
    </div>
  )
}

export default HomeProduct
