import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import HelperTextAligned from './Form';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({w,p,b,c,t}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const BootstrapButton = styled(Button)({

   
    height:"30%",
  
   
    border:"none",
    borderRadius:"6px"
  })
  return (
    <div>
      <BootstrapButton  onClick={handleOpen} style={{width:`${w}`,padding:`${p}`,background:`${b}`,color:`${c}`}}>{t}</BootstrapButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <HelperTextAligned/>
        </Box>
      </Modal>
    </div>
  );
}