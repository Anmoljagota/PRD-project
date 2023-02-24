import React, { useEffect, useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { DataGrid } from "@mui/x-data-grid";
import Styles from "./Product.module.css";
import { useSelector } from "react-redux";
import Switch from '@mui/material/Switch';
const Products = () => {
  const data = useSelector((details) => details.product_reducer.data);
  //this is for a switch in material ui
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const rows = useMemo(
    () =>
      data.map((items) => ({
        id: items._id,
        image: items.image,
        description: items.description,
        brand: items.brand,
        price: `₹${items.price}`,
        discount: `₹${items.discount}`,
        category: items.category,
      })),
    [data]
  );
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <Box height="40px" width="50px">
          <img src={params.value} height="100%" width="100%" alt="Error"/>
        </Box>
      ),
    },
    { field: "description", headerName: "Name", width: 230 },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
    },
    {
      field: "price",
      headerName: "Final price",
      width: 110,
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 110,
    },
    {
      field: "category",
      headerName: "Category",
      width: 80,
    },
    {
      field: "delete",
      headerName: "DELETE",
      width: 80,
      renderCell: (params) => (
        <Box height="40px" width="50px">
           <Switch  color="warning" lebel="delete" onChange={Deletedata}/>
        </Box>
      ),
    },
  ];
function Deletedata(){
  
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
              backgroundColor: '#3d4a70',
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
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};

export default Products;
