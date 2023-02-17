import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
export default function SimpleBackdrop({ loading, error }) {
  return (
    <div >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex + 1 }}
        open={loading === true || error === true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
