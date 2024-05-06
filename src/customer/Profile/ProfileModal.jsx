import React, { useEffect } from 'react'
import { Box, Modal,Button, Typography, Avatar } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../State/Auth/Action';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const ProfileModal = ({handleClose, open}) => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);

    useEffect(() => {
      if (jwt) {
        dispatch(getUser(jwt));
      }
    }, [jwt, auth.jwt]);

    const handleLogout = () => {
      dispatch(logout());
      handleClose();
    };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex flex-col items-start ">
            <div className="flex pb-4 gap-2 items-center justify-center">
              <Avatar
                sx={{
                  bgcolor: "black",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {auth.user?.firstName[0].toUpperCase()}
              </Avatar>
              <div className="font-jost-medium">{auth.user?.email}</div>
            </div>
            <div className="">
              <span className="font-gilroy">First Name : </span>
              <span className="font-jost-medium">{auth.user?.firstName}</span>
            </div>
            <div className='pb-5'>
              <span className="font-gilroy">Last Name : </span>
              <span className="font-jost-medium">{auth.user?.lastName}</span>
            </div>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleLogout}
              sx={{
                px: "2rem",  
                color: "white",
                overflow: "hidden",
                py: ".8rem",
                fontFamily: "jost-light",
                bgcolor: "black",
                ":hover": {
                  bgcolor: "#fff",
                  color: "black",
                  boxShadow: "none",
                  border: "1px solid currentColor",
                },
              }}
            >
              Logout
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProfileModal