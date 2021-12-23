import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const btnStyle = {
  color: 'black',
  fontSize: 'clamp(.8rem, 1.5vw, 1.4rem)',
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 280,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const modalContent = [
  {
    id: "GF",
    option: "gluten free",
  },
  {
    id: "DF",
    option: "dairy free",
  },
  {
    id: "V",
    option: "vegeterian",
  },
  {
    id: "VE",
    option: "vegan",
  },
  {
    id: "NF",
    option: "nut free",
  },
  {
    id: "O",
    option: "option",
  },
]

const MenuModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if(open === true) {
      document.querySelector("#root").style.width = "100vw"
    }else {
      document.querySelector("#root").style.width = "100%"
    }
  }, [open])

  return (
    <div className="info">
      <Button style={btnStyle} onClick={handleOpen}>info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          {modalContent.map(content => (
            <div
              key={content.id} 
              style={{
                display: 'flex', width: '100%', justifyContent: 'center', padding: '1em'
              }}
            >
              <h4 style={{flex: 1}}>{content.id}</h4>
              <h3 style={{flex: 5}}>{`: ${content.option}`}</h3>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

export default MenuModal;
