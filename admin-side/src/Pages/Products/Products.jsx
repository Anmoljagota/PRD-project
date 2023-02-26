import React, { useEffect, useMemo } from "react";
import { Box, Button, Container } from "@chakra-ui/react";
import { DataGrid } from "@mui/x-data-grid";
import Styles from "./Product.module.css";
import { useSelector } from "react-redux";
import Switch from '@mui/material/Switch';
import {TbEdit} from "react-icons/tb"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicModal from "./Modal";
const Products = () => {
  const data = useSelector((details) => details.product_reducer.data);
  //this is for a switch in material ui
  console.log(data.length,"lengthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
  const rows = useMemo(
    () =>
      data?.map((items,index) => ({
        id: data[data.length-(index+1)]._id,
        image: data[data.length-(index+1)].image,
        description: data[data.length-(index+1)].description,
        brand: data[data.length-(index+1)].brand,
        price: `₹${data[data.length-(index+1)].price}`,
        discount: `₹${data[data.length-(index+1)].discount}`,
        category: data[data.length-(index+1)].category,
      })),
    [data]
  );
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 80,
      renderCell: (params) => (
        <Box height="40px" width="50px">
          <img src={params.value} height="100%" width="100%" alt="Error"/>
        </Box>
      ),
    },
    { field: "description", headerName: "Name", width: 200 },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
    },
    {
      field: "price",
      headerName: "Final price",
      width: 90,
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 90,
    },
    {
      field: "category",
      headerName: "Category",
      width: 80,
    },
    {
      field: "i",
      headerName: "Added By",
      width: 80,
      renderCell: (params) => (
        <Box height="40px" width="50px">

                 </Box>
      ),
    },
    {
      field: "delete",
      headerName: "DELETE",
      width: 80,
      renderCell: (params) => (
        <Box height="40px" width="50px" >
           <Switch  color="warning" lebel="delete" onChange={Deletedata}/>
        </Box>
      ),
    },
    {
      field: "update",
      headerName: "UPDATE",
      width: 80,
      renderCell: (params) => (
        <Box  height="20px" fontSize="15px" width="70px" background="#09ab3f" p="15px" className={Styles.flexall} borderRadius="10px">
         <Box ><TbEdit /></Box>
          <Box >Edit</Box>
        </Box>
      ),
    },
  ];
function Deletedata(){
  console.log("hlooooooooooooooooo")
  toast.warn(`🦄 Product Deleted`, {
    position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
    });

}
  return (
    <div className={Styles.products}>
      <br />
      <br />
      <Box className={Styles.data}  sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              color:"white"
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: '#0071dc',
              borderBottom: "none",
              color:'white'
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: '#3d4a70',
              color:'white'
            },
          }}
            >
              <Container color="white" fontSize="27px"  fontWeight="600" p="20px"  textAlign="left" className={Styles.flexall}>
                <Container>Product Overview</Container>
                <BasicModal/>
                 </Container>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        
      </Box>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  );
};

export default Products;
