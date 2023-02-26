import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { adddata, adminproduct } from "../../redux/All_Details/action";
export default function HelperTextAligned() {
  const dispatch = useDispatch();
  const data = useSelector((details) =>
    console.log("detailsssssssss", details)
  );
  const fields = [
    { label: "Image URL", name: "image", value: "" },
    { label: "Product Name", name: "description", value: "" },
    { label: "Product Brand", name: "brand", value: "" },
    { label: "Price", name: "price", value: "" },
    {
      label: "Discount (optional)",
      name: "discount",
      helper: "if Available",
      value: "",
    },
    { label: "Category", name: "category", value: "" },
    {
      label: "Prev Price(optional)",
      name: "prev_price",
      helper: "if Available",
      value: "",
    },
  ];
  const [producdata, setData] = React.useState("");
  function Addproduct() {
    dispatch(adddata(producdata));
    dispatch(adminproduct(producdata))
  }
  function storedata(e) {
    let { value, name } = e.target;
    if(name==="price"){
      value=Number(value)
    }
    if(name==="discount"){
      value=Number(value)
    }
    if(name==="prev_price"){
      value=Number(value)
    }
    setData({ ...producdata, [name]: value });
  }
  console.log("i ma setdatatattatata", producdata);
  return (
    <Box
      sx={{
        height: "350px",
        alignItems: "center",
        overflow: "scroll",
        "& > :not(style)": { m: 1 },
      }}
    >
      {fields.map((data, index) => {
        return (
          <TextField
            key={index}
            name={data.name}
            label={data.label}
            onChange={storedata}
            helperText={data.helper}
          />
        );
      })}
      <br />
      <button onClick={Addproduct} className={Styles.addbutton}>
        ADD
      </button>
    </Box>
  );
}
