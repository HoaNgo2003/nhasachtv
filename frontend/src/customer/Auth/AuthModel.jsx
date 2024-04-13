import React from 'react'
import {useLocation} from 'react-router-dom'
import {Modal, Box} from '@mui/material'
import RegisterForm from './RegisterForm';
import Login from './LoginForm';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:'none',
    boxShadow: 24,
    p: 4,
  };
const AuthModel = ({handleClose, open}) => {
    const location = useLocation();
    console.log(location.pathname)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {location.pathname==="/login"?<Login/>:<RegisterForm/>}
         
        </Box>
      </Modal>
    </div>
  )
}

export default AuthModel
