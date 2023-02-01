import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Styles from "../css/Project.module.css"
import data from "../db.json"
console.log(data)
const Latest = () => {
  return (
    <div>
      <Box border="1px solid black" className={Styles.flexall}>
        <Box width="32%" border="1px solid black"  height="20px"></Box>
        <Box width="32%" border="1px solid black" height="20px"></Box>
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
        <Box width="28%" border="1px solid black" height="20px">{data.map((items,index)=>(
            <Box key={index}>
           <Box><Image src={items.image} alt="image not found"/></Box>
         <Box>{items.name}</Box>  
            </Box>
          
        ))}</Box>
        </SimpleGrid>
      </Box>
    </div>
  )
}

export default Latest
