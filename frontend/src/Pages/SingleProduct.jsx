import React from 'react'
import { useSelector } from 'react-redux'

const SingleProduct = () => {
  const details=useSelector((data)=>console.log("i am data",data))
  return (
    <div>
      hlo
    </div>
  )
}

export default SingleProduct
