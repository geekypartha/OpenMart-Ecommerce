import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { auth } = useSelector((store) => store);
  const handleCloseSnakbar = () => setOpenSnackBar(false);
  
  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   }
  // }, [jwt, auth.jwt]);


  useEffect(() => {
    if (auth.user || auth.error) setOpenSnackBar(true);
  }, [auth.user]);


  const handleSubmit = (e) => {
    e.preventDefault(); //coz form refresh after submitting, to prevent this issue this is written

  
    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));

    console.log("userData", userData);
  };

  


  return (
    <div className="">
      <div>
        <div className="flex justify-center pb-3">
          <img className="w-[10rem]" src="image/open2.png" alt="" />
        </div>
        <h3 className="flex justify-center pb-5 font-jost-medium">
          Login to OpenMart
        </h3>
      </div>
      <form onSubmit={handleSubmit} fontFamily="seoge-ui">
        <Grid container spacing={2}>
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
                Login
              </div>
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <div className="flex items-center justify-center pt-5">
          <h3 className="flex justify-center  font-jost-medium">
            Don't have an account?
          </h3>
          <Button
            onClick={() => navigate("/register")}
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
            Sign up
          </Button>
        </div>
      </div>
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnakbar}>
        <Alert onClose={handleCloseSnakbar} severity="success" sx={{ width: '100%' }}>
          {auth.error?auth.error:auth.user?"Register Success":""}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
