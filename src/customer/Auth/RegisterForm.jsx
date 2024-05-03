import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const [openSnackBar, setOpenSnackBar] = useState(false);

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleClose = () => setOpenSnackBar(false);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user]);
  

  const handleSubmit = (e) => {
    e.preventDefault(); //coz form refresh after submitting, to prevent this issue this is written

    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("userData", userData);
  };

  return (
    <>
      <div>
        <Snackbar>
          <Alert>hii</Alert>
        </Snackbar>

        <div className="flex justify-center pb-3">
          <img className="w-[10rem]" src="image/open2.png" alt="" />
        </div>
        <h3 className="flex justify-center pb-5 font-jost-medium">
          Sign up to OpenMart
        </h3>
      </div>
      <form onSubmit={handleSubmit} fontFamily="seoge-">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="lasttName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              autoComplete="Email Address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="Password"
            />
          </Grid>
          <Grid className="flex justify-center" item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              type="submit"
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
              <div className="flex items-center font-jost-medium gap-2 justify-center">
                Create Account
              </div>
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <div className="flex justify-center items-center pt-5 ">
          <h3 className="flex justify-center font-jost-light">
            Already have an account?
          </h3>
          <Button
            onClick={() => navigate("/login")}
            sx={{
              color: "black",
              fontFamily: "jost-medium",
              bgcolor: "white",
              ":hover": {
                bgcolor: "#fff",
                color: "#FFA800",
                boxShadow: "none",
              },
            }}
          >
            Login
          </Button>
        </div>

        <Snackbar
          open={openSnackBar}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {auth.error ? auth.error : auth.user ? "Register Success" : ""}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default RegisterForm;
