import React, { useEffect } from 'react'
import CartItem from './CartItem'

import { useDispatch, useSelector } from "react-redux";
import { getCart } from '../../../State/Cart/Action';
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";

const Cart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((store)=>store);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=1");
  };

  useEffect(()=>{
    dispatch(getCart(jwt));
  },[jwt, cart.updateCartItem, cart.deleteCartItem]);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  return (
    <div className="pt-20">
      <div>
        <h1 className="font-jost-light font-semibold lg:text-4xl text-xl flex justify-center p-10">
          Shopping Cart
        </h1>

        {/* table */}
        <div className="lg:px-48 md:px-30 ">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead className="font-jost-medium">
                <TableRow className="">
                  <StyledTableCell className="w-[44rem] font-jost-medium">
                    <span className="font-jost-medium">Product</span>
                  </StyledTableCell>
                  <StyledTableCell className="w-[36rem] font-jost-medium">
                    <span className="font-jost-medium">Quantity</span>
                  </StyledTableCell>
                  <StyledTableCell className="font-jost-medium">
                    <span className="font-jost-medium">Subtotal</span>
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody></TableBody>
            </Table>
          </TableContainer>

          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      </div>

      {/* PriceDetails */}
      {/* <PriceDetails /> */}
      <div className="lg:px-48 px-5 pb-20 pt-8 flex justify-center lg:justify-end ">
        <div className="h-[12rem] w-[30rem]">
          <div>
            <h1 className="flex justify-center md:text-2xl text-xl font-semibold font-jost-medium pb-10">
              Order Summary
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-jost-light text-gray-700">Subtotal</span>
            <span className=" text-md font-seoge-ui">
              ₹{cart.cart?.totalDiscountedPrice}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-jost-light text-gray-700">
              Delivery Charges
            </span>
            <span className=" text-md font-seoge-ui">Free</span>
          </div>
          <div className="pt-5 flex justify-between items-center">
            <span className="font-jost-medium font-base">ORDER TOTAL</span>
            <span className="font-semibold text-lg font-seoge-ui">
              ₹{cart.cart?.totalDiscountedPrice}
            </span>
          </div>
          {/*Proceed to checkout button */}
          <div className="py-10 flex justify-center">
            <Button
              onClick={handleCheckout}
              variant="outlined"
              sx={{
                px: { sm: "9.6rem" },
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
                Proceed to Checkout
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart